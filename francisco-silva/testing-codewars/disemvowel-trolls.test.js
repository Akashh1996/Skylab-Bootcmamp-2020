const disemvowel = require("./disemvowel-trolls")


xdescribe("disemvowel", () => {
    test("should check if there arent vowels", () => {
        expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
    });
    test("should check if there arent vowels", () => {
        expect(disemvowel("Nao entendo nada desta merda")).toBe("N ntnd nd dst mrd");
    });
    test("should check if there arent vowels", () => {
        expect(disemvowel("Akash es muy loco")).toBe("ksh s my lc");
    });

})

