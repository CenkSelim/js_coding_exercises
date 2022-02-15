const {
    sumDigits,
    createRange
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

describe("createRange", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => createRange()).toThrow("start is required");
    });
    test("it throws an error if not passed a number", () => {
        expect(() => createRange(2)).toThrow("end is required");
    }); 
    test("should return an array with a range of numbers which include start and end, plust inbetween determined by step", () => {
        expect(createRange(2,4)).toEqual([2,3,4]);
        expect(createRange(5,10,2)).toEqual([5,7,9,10]);
        expect(createRange(1,100,20)).toEqual([1,21,41,61,81,100]);
        expect(createRange(1,123,61)).toEqual([1,62,123]);
    });
    
});