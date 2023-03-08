const testModule = require("./testModule1");

test('no user passed to login function', () => {
    expect(testModule.login("1")).toBe(true);
});

test('user has id property', () => {
    expect(testModule.login({ id: 2 })).toBe(true);
});

