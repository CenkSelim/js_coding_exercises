const {
    sumDigits,
    createRange,
    getScreentimeAlertList
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

describe("getScreentimeAlertList", () => {
    test("it throws an error if not passed array of users", () => {
        expect(() => getScreentimeAlertList()).toThrow("users is required");
    });
    test("it throws an error if not passed a date", () => {
        expect(() => getScreentimeAlertList([])).toThrow("date is required");
    }); 
    test("should return an array of users with more than 100 minutes on that date", () => {
        const users = [
                        {
                            username: "beth_1234",
                            name: "Beth Smith",
                            screenTime: [
                                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                                        ]
                        },
                            {
                            username: "sam_j_1989",
                            name: "Sam Jones",
                            screenTime: [
                                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                                        ]
                            },
                    ];
        expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["Beth Smith"]);
        expect(getScreentimeAlertList(users,"2019-06-14")).toEqual([]);
    });
    
});