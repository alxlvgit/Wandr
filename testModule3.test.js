const testModule = require("./testModule3");

test('Valid email format', () => {
  expect(testModule.validEmail("test@example.com")).toBe(true);
});

test('Invalid email format', () => {
  expect(testModule.validEmail("invalid_email")).toBe(false);
});