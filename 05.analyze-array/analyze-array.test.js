import { analyzeArray } from './analyze-array';

describe(" Analyze Array",
    () => {
        test("Base Case (1)", 
            () => {
                expect(analyzeArray([1,8,3,4,2,6])).toEqual({
                    average: 4, 
                    min: 1,
                    max: 8,
                    length: 6
                })
            }
        );

        test("Base Case (2)", 
            () => {
                expect(analyzeArray([1,2,3,4,5,6,7,8,9,10])).toEqual({
                    average: 5.5, 
                    min: 1,
                    max: 10,
                    length: 10
                })
            }
        );

        test("Handle empty array", 
            () => {
                expect(analyzeArray([])).toEqual(undefined)
            }
        );

        test("Handle non array input", 
            () => {
                expect(() => analyzeArray({})).toThrow("Expects an array")
            }
        );

        test("Handle non number elements", 
            () => {
                expect(() => analyzeArray([1,2,3,4, undefined])).toThrow("Expects a numeric array")
            }
        );
    }
)