const caesarCipher = (str, shiftFactor) => {
  if (typeof str !== "string") {
    return;
  }
  let ciphered = "";
  for (let i = 0; i < str.length; i++) {
    ciphered += shiftChar(str[i], shiftFactor);
  }
  return ciphered;
};
function shiftChar(char, shiftFactor) {
  const charCode = char.charCodeAt(0);
  if (char >= "A" && char <= "Z") {
    return String.fromCharCode(((charCode - 65 + shiftFactor) % 26) + 65);
  } else if (char >= "a" && char <= "z") {
    return String.fromCharCode(((charCode - 97 + shiftFactor) % 26) + 97);
  }
  return char;
}
module.exports = caesarCipher;
