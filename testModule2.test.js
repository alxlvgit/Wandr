const passReq = require("./testModule2");

test('Password greater or equal to 8 chars', () => {
  expect(passReq.validPass("1")).toBe(false);
});