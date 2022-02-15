const {
    sumDigits
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => sumDigits()).toThrow("n is required");
    });
    test("should return the sum of all the digits of the number supplied", () => {
        expect(sumDigits(2)).toBe(2);
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(222222)).toBe(12);
        expect(sumDigits(9876543210)).toBe(45);
    });
    
});