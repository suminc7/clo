
export function getMeasureHeight(val) {
    let inches = (val * 0.393700787).toFixed(0)
    const feet = Math.floor(inches / 12)
    inches %= 12
    return feet + "\'" + inches + '"'
}
export function getMeasureWeight(val) {
    return (val * 2.20462).toFixed(0)
}
