
// const test = (item) => {
//     if (!item.info.description || !item.info.fabric || !item.info.grading || !item.info.layer || !item.info.price || !item.info.simulation) throw new Error()
// }

const defaultColorway = [
    { ImagePath: null, IndexNo: -1, Name: 'White' }
]

const parseItem = (item) => {
    let isError = false
    item.Description = item.Description ? item.Description.trim() : ''
    const json = item.Description.replace(/\n/ig, '').replace(/↵/ig, '')
    try {
        item.info = JSON.parse(json)
    } catch (e) {
        isError = true
    }
    if (!item.hasOwnProperty('Colorways')) {
        item.Colorways = defaultColorway
    }
    if (!item.Colorways.length) {
        item.Colorways = defaultColorway
    }

    if (isError) {
        item.info = {
            description: '',
            fabric: '100% Cotton',
            grading: [
                { indexNo: -1, name: 'F' }
            ],
            layer: 0,
            price: 99,
            simulation: 10
        }
    } else if (typeof item.info === 'object') {
        item.info.description = item.info.hasOwnProperty('description') && item.info.description || 'description'
        item.info.fabric = item.info.hasOwnProperty('fabric') && item.info.fabric || '100% Cotton'
        item.info.grading = item.info.hasOwnProperty('grading') && item.info.grading || [{ indexNo: -1, name: 'F' }]
        item.info.layer = item.info.hasOwnProperty('layer') && item.info.layer || 0
        item.info.price = item.info.hasOwnProperty('price') && item.info.price || 99
        item.info.simulation = item.info.hasOwnProperty('simulation') && item.info.simulation || 10
    }
    return item
}
//
// const item = {
//     Description: '        {↵"layer" : 9, ↵"grading":[ { "indexNo" : 0, "name" : "XS" } , { "indexNo" : 1, "name" : "S" },  { "indexNo" : 2, "name" : "M" },  { "indexNo" : 3, "name" : "L" },  { "indexNo" : 4, "name" : "XL" },  { "indexNo" : 5, "name" : "XXL" }  ] , ↵"simulation" : 15, ↵"description":"This T-shirt is a good item to make your daily life stylish. Experience great fit and design.", ↵"price" : 89.0, ↵"fabric" : "100% Cotton"}'
// }

export {
    parseItem
}
