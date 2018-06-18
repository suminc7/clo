var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var jsonfile = require('jsonfile');
var _ = require('lodash')
const config = require('../config');


// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet('123');
var sheet;
var messages = {};
var langNum = 4;
jsonfile.spaces = 2;


function workingWithCells(obj) {

    return new Promise(resolve => {
        var sheet = obj.sheet;
        console.log('seet name: ', obj.sheet.title)
        sheet.getRows({
            offset: 0,
        }, function( err, rows ){
            var category = sheet.title;
            resolve({category, rows})
        });
    })
}



async.series([
    function setAuth(step) {
        // see notes below for authentication instructions!
        var creds = require('./token.json');
        doc.useServiceAccountAuth(creds, step);

    },
    function getInfoAndWorksheets(step) {
        doc.getInfo(function(err, info) {
            console.log('Loaded doc: '+info.title+' by '+info.author.email);
            sheet = info.worksheets[0];
            sheet.getCells({
                'min-row': 1,
                'max-row': 1,
                'return-empty': false
            }, function(err, cells) {

                // create language key
                var localeArr = [];
                for(var i = 1;i < langNum;i++){
                    var cell = cells[i];
                    messages[cell.value] = {};
                    localeArr.push(cell.value);
                }

                var arr = []

                for(var i = 0;i<info.worksheets.length;i++){
                    sheet = info.worksheets[i];
                    arr[i] = {sheet: sheet, localeArr: localeArr}
                }

                Promise.all(arr.map(workingWithCells)).then(function(values) {
                    // add key and value
                    for(var k = 0;k < values.length;k++){
                        var category = values[k].category;
                        var rows = values[k].rows;
                        for(var i = 0;i < rows.length;i++){
                            for(var j = 0;j < localeArr.length;j++){
                                if(!messages[localeArr[j]][category]){
                                    messages[localeArr[j]][category] = {};
                                }
                                messages[localeArr[j]][category][rows[i].key] = rows[i][localeArr[j]];
                            }
                        }
                    }

                    jsonfile.writeFile('./languages/lang.json', messages, function (err) {
                        console.log('save complete!')
                    })

                }, function(reason) {
                    console.log(reason)
                });


            });





        });
    }
], function(err){
    if( err ) {
        console.log('Error: '+err);
    }
});