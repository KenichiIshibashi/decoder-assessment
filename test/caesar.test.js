// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar", ()=> {
  it("should return false if the shift value is 0",() => {


  const message = "monkey";
  const shift = 0;
  const actual = caesar(message,shift);
  
  expect(actual).to.be.false;
});

it ("should return false if the shift value does not exist", () => {

  const message = "monkey";
  const shift = undefined;
  const actual = caesar(message,shift);

  expect(actual).to.be.false

});

it ("should return false if the shift value is less than -25",()=>{

  const message = "monkey";
  const shift = -26;
  const actual = caesar(message,shift);
  
  expect(actual).to.be.false
});

it ("should return false if the shift value is greater than 25",()=>{

  const message = "monkey";
  const shift = 26;
  const actual = caesar(message,shift);
  
  expect(actual).to.be.false
});
  
it ("spaces should be maintained throughout, as well as nonalphabetical symbols",()=> {
  
  const message = "monkey banana"
  const shift = 1;
  const actual = caesar(message,shift);
  const expected = "npolfz cbobob"
  
  expect(actual).to.equal(expected)
});
  
it ("should not be case sensitive", ()=> {
  
  const message = "Monkey Banana"
  const shift = 1;
  const actual = caesar(message,shift);
  const expected = "npolfz cbobob"
});
  
it ("should wrap around the alphabet if the shifted letter does past the end",() => {
  
  const message = "Monkey Bananaz"
  const shift = 1;
  const actual = caesar(message,shift);
  const expected = "npolfz cboboba"
  
  });

it("should be able to decode messages",() => {
  
  const message = "npolfz cbobob"
  const shift = -1;
  const actual = caesar(message,shift,false);
  const expected = "monkey banana"
  
})
})
