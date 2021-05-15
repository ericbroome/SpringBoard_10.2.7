describe("#setPi", () => {
    it("should throw an error attempting to set constPI", () => {
        expect(setPI(constPI)).toThrow();
    });
    it("should not throw an error attempting to set varPI", () => {
        expect(setPI(varPI)).not.toThrow();
    });
    it("should throw an error attempting to redeclare constPI", () => {
        expect(eval("const constPI = 3.14")).toThrow();
    });
    it("should allow redefining varPI", () => {
        expect(eval("var varPI = 3.14")).not.toThrow();
    });
});