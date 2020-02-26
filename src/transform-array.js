let discardNext = "--discard-next"
let discardPrev = "--discard-prev"
let doubleNext = "--double-next"
let doublePrev = "--double-prev"

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error
    let accumulator = []
    for (let index = 0; index < arr.length; index++) {
        const currentValue = arr[index];
        switch (currentValue) {
            case discardNext:
                if (index < arr.length - 1) index++;
                break;
            case discardPrev:
                if (index > 0) accumulator.pop()
                break;
            case doubleNext:
                if (index < arr.length - 1) accumulator.push(arr[index + 1])
                break;
            case doublePrev:
                if (index != 0) accumulator.push(arr[index - 1])
                break
            default:
                accumulator.push(currentValue)
                break;
        }
    }
    return accumulator
};