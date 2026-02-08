import {capitalize} from './capitalize';

test("Base Case (1)", () => {
    expect(capitalize("computer")).toBe("Computer");
})

test("Base Case (2)", () => {
    expect(capitalize("science")).toBe("Science");
})

test("Edge case: empty string", () => {
    expect(capitalize("")).toBe("");
});

test("Edge case: string of length === 1", () => {
    expect(capitalize("s")).toBe("S");
});

test("Edge case: invalid arguments", () => {
    expect(() => capitalize()).toThrow(new TypeError("Expects a string"));
    expect(() => capitalize(null)).toThrow(new TypeError("Expects a string"));
    expect(() => capitalize({})).toThrow(new TypeError("Expects a string"));
})