const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA
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
        expect(isValidDNA("A")).toBe(true);
        expect(isValidDNA("12345CGT")).toBe(false);
        expect(isValidDNA("ACGTY")).toBe(false);
    });
});
describe("getComplementaryDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    });
    test("it throws an error if not passed a valid dna string", () => {
        expect(() => {
            getComplementaryDNA("SCALA");
        }).toThrow("valid dna string is required");
    });
    test("returns return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of ACTG would have a complementary DNA string of TGAC", () => {
        expect(getComplementaryDNA("AGCT")).toBe("TCGA");
        expect(getComplementaryDNA("AGCT")).toBe("TCGA");
        
    });
});
