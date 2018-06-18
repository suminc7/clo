
const getObject = (array, key, value, children) => {
    let o = null
    array.some(function iter(a) {
        if (a[key] === value || a[key].toString().toLowerCase() === value) {
            o = a
            return true
        }
        return Array.isArray(a[children]) && a[children].some(iter)
    })
    return o
}

export {
    getObject
}
