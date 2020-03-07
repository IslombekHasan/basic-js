class VigenereCipheringMachine {

    constructor(direct = true) {
        this.direct = direct
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    encrypt(message, keyword) {
        if (!message || !keyword) throw Error

        let uppercasedMsg = message.toUpperCase()
        let key = this.generateKey(uppercasedMsg, keyword)
        let cipheredMessage = ''

        for (let index = 0; index < message.length; index++) {
            if (this.indexInAlphabet(uppercasedMsg[index]) == -1)
                cipheredMessage += uppercasedMsg[index]
            else
                cipheredMessage += this.alphabet[
                    ((this.indexInAlphabet(uppercasedMsg[index]) +
                        this.indexInAlphabet(key[index])) % 26)
                ]
        }

        return this.direct ? cipheredMessage : cipheredMessage.split('').reverse().join('')
    }

    decrypt(message, keyword) {
        if (!message || !keyword) throw Error

        let uppercasedMsg = message.toUpperCase()
        let key = this.generateKey(uppercasedMsg, keyword)
        let decipheredMessage = ''

        for (let index = 0; index < message.length; index++) {
            if (this.indexInAlphabet(uppercasedMsg[index]) == -1)
                decipheredMessage += uppercasedMsg[index]
            else {
                let num = this.indexInAlphabet(uppercasedMsg[index]) -
                    this.indexInAlphabet(key[index])
                if (num < 0) num = 26 + num;
                decipheredMessage += this.alphabet[num]
            }
        }

        return this.direct ? decipheredMessage : decipheredMessage.split('').reverse().join('')
    }

    generateKey(message, keyword) {
        let key = ''

        let offset = 0
        for (let index = 0; index < message.length; index++) {
            if (this.indexInAlphabet(message[index]) == -1) {
                key += message[index]
                offset++
                continue
            }
            key += keyword[(index - offset) % keyword.length]
        }
        return key.toUpperCase()
    }

    indexInAlphabet(letter) {
        return this.alphabet.indexOf(letter)
    }
}

module.exports = VigenereCipheringMachine;