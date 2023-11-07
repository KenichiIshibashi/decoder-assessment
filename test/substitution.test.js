// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe ("substitution", ()=> {
it("should return false if the given alphabet is not 26 characters", () =>{

  const input = "hello";
  const alphabet = "abcdefg";
  const actual = substitution(input, alphabet);

  expect(actual).to.be.false;
});

it("should return false if there are duplicate characters in the givrn alphabet", () =>{
  
  const input = "hello";
  const alphabet = "abcdefghijklmnopqrstuvwxyy";
  const actual = substitution(input, alphabet);

  expect(actual).to.be.false;
});

it("should correctly translate the given phrase based on the given alphabet", () =>{
  
  const input = "hello";
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const expected = "itssg";
  const actual = substitution(input, alphabet);

  expect(actual).to.equal(expected);
});

it("should maintain spaces in the message before and after encoding", () =>{
  
  const input = "hello user";
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const expected = "itssg xltk";
  const actual = substitution(input, alphabet);

  expect(actual).to.equal(expected);
});

it("should maintain spaces in the message before and after decoding", () =>{
  
  const input = "itssg xltk";
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const expected = "hello user";
  const actual = substitution(input, alphabet, false);

  expect(actual).to.equal(expected);
});

it("should not be case sensitive", () =>{
  
  const input = "Hello User";
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const expected = "itssg xltk";
  const actual = substitution(input, alphabet);

  expect(actual).to.equal(expected);
});
});
