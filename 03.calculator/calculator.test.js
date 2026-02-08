import { add, subtract, multiply, divide } from './calculator';

describe( "Addition", 
    () => {
        test( "Base case: 1 + 1 is 2",
            () => {
                expect(add(1,1)).toBe(2);
            }
        );

        test( "Base case: 2 + 4 is 6",
            () => {
                expect(add(2,4)).toBe(6);
            }
        );

        test( "Edge case: invalid arguments",
            () => {
                expect(() => add()).toThrow("Expects a number");
                expect(() => add(null, 2)).toThrow("Expects a number");
                expect(() => add({}, {})).toThrow("Expects a number");
            }
        );
    }
);

describe( "Subtraction", 
    () => {
        test( "Base case: 1 - 1 is 0",
            () => {
                expect(subtract(1,1)).toBe(0);
            }
        );

        test( "Base case: 2 - 4 is -2",
            () => {
                expect(subtract(2,4)).toBe(-2);
            }
        );

        test( "Edge case: invalid arguments",
            () => {
                expect(() => subtract()).toThrow("Expects a number");
                expect(() => subtract(null, 2)).toThrow("Expects a number");
                expect(() => subtract({}, {})).toThrow("Expects a number");
            }
        );
    }
);

describe( "Multiply", 
    () => {
        test( "Base case: 1 * 1 is 1",
            () => {
                expect(multiply(1,1)).toBe(1);
            }
        );

        test( "Base case: 2 * 4 is 8",
            () => {
                expect(multiply(2,4)).toBe(8);
            }
        );

        test( "Edge case: invalid arguments",
            () => {
                expect(() => multiply()).toThrow("Expects a number");
                expect(() => multiply(null, 2)).toThrow("Expects a number");
                expect(() => multiply({}, {})).toThrow("Expects a number");
            }
        );
    }
);

describe( "Divide", 
    () => {
        test( "Base case: 1 / 1 is 1",
            () => {
                expect(divide(1,1)).toBe(1);
            }
        );

        test( "Base case: 2 / 4 is 0.5",
            () => {
                expect(divide(2,4)).toBe(0.5);
            }
        );

        test( "Edge case: Divide by zero",
            () => {
                expect(divide(2,0)).toBe(Infinity);
            }
        );


        test( "Edge case: invalid arguments",
            () => {
                expect(() => divide()).toThrow("Expects a number");
                expect(() => divide(null, 2)).toThrow("Expects a number");
                expect(() => divide({}, {})).toThrow("Expects a number");
            }
        );
    }
);