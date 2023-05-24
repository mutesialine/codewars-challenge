const strictEqual = require("chai").assert.strictEqual;
import { solution } from "../romanNumeralsDecoder";

function doTest(romanString, expected) {
  const actual = solution(romanString);
  strictEqual(actual, expected, `for roman number ${romanString}`);
}

describe("Tests", () => {
  it("sample tests", () => {
    doTest("XXI", 21);
    doTest("I", 1);
    doTest("IV", 4);
    doTest("MMVIII", 2008);
    doTest("MDCLXVI", 1666);
  });
});
