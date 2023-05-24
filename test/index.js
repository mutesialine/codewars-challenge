import { joinStrings } from "../stringCocatenation/index.js";
import chai from "chai";
const assert = chai.assert;

describe("add", () => {
  it("should work for sample tests", () => {
    assert.strictEqual(joinStrings("string1", "string2"), "string1 string2");
    assert.strictEqual(joinStrings("testing", "testing"), "testing testing");
    assert.strictEqual(joinStrings(134, 234), "134 234");
  });
});
