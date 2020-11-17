function disemvowel(str) {
    if (typeof str === "number") {
        return ""
    } else {
        let newString = ""
        for (let i = 0; i < str.length; i++) {
            let strCapital = str[i].toLowerCase()
            if (strCapital !== "a" && strCapital !== "e" && strCapital !== "i" && strCapital !== "o" && strCapital !== "u") {
                newString += str[i]

            }
        }
        return newString
    }
}

module.exports = disemvowel;