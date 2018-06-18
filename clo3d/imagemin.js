console.log('imagemin.js')

const globby = require('globby');
const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg  = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

globby('../WEB-CLO3D/static/images/**/*.{jpg,png,svg,gif}', {nodir: true}).then(paths => {

    paths.map(x => {
        imagemin([x], path.dirname('../WEB-CLO3D/' + x), {
            plugins: [
                imageminMozjpeg ({quality: 90}),
                imageminPngquant({quality: '75-80'})
            ]
        }).then(files => {
            console.log(files[0].path);
            //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
        });
    })
})