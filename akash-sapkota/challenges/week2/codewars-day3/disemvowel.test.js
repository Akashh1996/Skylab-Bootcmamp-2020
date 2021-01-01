const disemvowel = require("./disemvowel")

xdescribe("disemvowel", () => {
    test("get new string without vowels", () => {
        expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!")
    })
    test("get new string without vowels", () => {
        expect(disemvowel("its been 4 days since last git exploded")).toBe("ts bn 4 dys snc lst gt xpldd")
    })
    test("get new string without vowels", () => {
        expect(disemvowel(123)).toBe("")
    })

})