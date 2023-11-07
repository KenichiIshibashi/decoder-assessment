// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    //making sure the length of the alphabet is exactly 26 characters and alphabet is defined
    if (!alphabet || alphabet.length !== 26){
      return false;
    }
    input = input.toLowerCase();
     const map = {};
     for(let i = 0; i < alphabet.length; i++){
       if(map[alphabet[i]]){
         return false;
       } else {
         map[alphabet[i]] = i;
       }
    }
    let result = '';
    for(let i=0; i<input.length;i++){
      if(input[i]===' '){
        result+=input[i]
      } else if(encode){
        const index = originalAlphabet.indexOf(input[i]);
        result += alphabet[index];
      }
          else{
            const index = alphabet.indexOf(input[i]);         
            result +=originalAlphabet[index]
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
