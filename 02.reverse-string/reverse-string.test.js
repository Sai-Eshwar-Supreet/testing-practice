import {reverseString} from './reverse-string';


describe(
    "Reverse string",
    () => {
        test(
            "Base Case: expect reverse of \"Sai\" to be \"iaS\"",
            () => {
                expect(reverseString("Sai")).toBe("iaS");
            }
        );

        test(
            "Base Case: expect reverse of \"Sri\" to be \"irS\"",
            () => {
                expect(reverseString("Sri")).toBe("irS");
            }
        );

        test(
            "Edge Case: expect reverse of \"S\" to be \"S\"",
            () => {
                expect(reverseString("S")).toBe("S");
            }
        );

        test(
            "Edge Case: expect invalid arguments to throw type error",
            () => {
                expect(() => reverseString()).toThrow("Expects a string");
                expect(() => reverseString(null)).toThrow("Expects a string");
                expect(() => reverseString({})).toThrow("Expects a string");
            }
        );
    }
);