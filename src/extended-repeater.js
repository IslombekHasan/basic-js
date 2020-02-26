module.exports = function repeater(str, options) {
    let result = []

    str = str !== null ? str : `${str}`
    addition = options.addition !== null ? options.addition : `${options.addition}`

    separator = options.separator || '+'
    additionSeparator = options.additionSeparator || '|'

    repeatTimes = options.repeatTimes || 1
    additionRepeatTimes = options.additionRepeatTimes || 1

    for (let index = 0; index < repeatTimes; index++) {
        result.push(str)

        for (let index = 0; index < additionRepeatTimes; index++) {
            result.push(addition)
            if (index != additionRepeatTimes - 1) result.push(additionSeparator)

        }
        if (index != repeatTimes - 1) result.push(separator)
    }

    return result.join('')
};