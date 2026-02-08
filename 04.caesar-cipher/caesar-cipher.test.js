import { caesarCipher  } from './caesar-cipher';

describe("Caesar Cipher", 
    () => {

        test("Wraps around from z to a", 
            () => {
                expect(caesarCipher("xyz", 3)).toBe("abc")
            }
        );

        test("Preserves case", 
            () =>{
                expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
            }
        );

        test("Shifts the alphabets retains the rest", 
            () => {
                expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
            }
        );

        test("Handle empty string", 
            () => {
                expect(caesarCipher("", 3)).toBe("")
            }
        );
        test("Handle invalid text", 
            () => {
                expect(() => caesarCipher(undefined, 3)).toThrow("Expects text of type string")
                expect(() => caesarCipher(null, 3)).toThrow("Expects text of type string")
                expect(() => caesarCipher({}, 3)).toThrow("Expects text of type string")
            }
        );

        test("Handle invalid shift value", 
            () => {
                expect(() => caesarCipher("")).toThrow("Shift should be an integer")
                expect(() => caesarCipher("", undefined)).toThrow("Shift should be an integer")
                expect(() => caesarCipher("", {})).toThrow("Shift should be an integer")
                expect(() => caesarCipher("", 2.5)).toThrow("Shift should be an integer")
            }
        );
    }
)