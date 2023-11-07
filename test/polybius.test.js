// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Cipher", () => {
  describe("polybius function", () => {
    it("when encoding, it should translate both 'i' and 'j' to 42", () => {
      
      const input = "jig";
      const expected = "424222"
      const actual = polybius(input, true);

      expect(actual).to.equal(expected);
    });

    it("when decoding, it should translate 42 to both 'i' and 'j'", () => {
     
      const input = "424222";
      const actual = polybius(input, false);
      
      expect(actual).to.include('i');
      expect(actual).to.include('j');
    });

    it("should not be case sensitive", () => {
      
      const input = "Jig";
      const expected = "424222";
      const actual = polybius(input, true);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
      
      const input = "hi hi";
      const expected = "3242 3242";
      const actual = polybius(input, true);
      expect(actual).to.equal(expected);
    });
    
})
});