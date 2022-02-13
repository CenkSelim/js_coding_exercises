const {
  sumMultiples,
  isValidDNA
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });
    test("it return the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("returns true if the string contains characters C, G, T or A only", () => {
        expect(isValidDNA("AGCT")).toBe(true);
        expect(isValidDNA("AGCTDDAA")).toBe(false);
        expect(isValidDNA("")).toBe(false);
    });
});
