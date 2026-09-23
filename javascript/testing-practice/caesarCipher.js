export function caesarCipher(str, shift) {
  const characters = str.split("");
  const encrytArray = [];
  const codeForA = "A".charCodeAt(0);
  const codeFora = "a".charCodeAt(0);
  characters.forEach((letter) => {
    if (/[a-z]/.test(letter)) {
      const encrytchar = getEncryptedChar(codeFora, letter, shift);
      encrytArray.push(encrytchar);
    } else if (/[A-Z]/.test(letter)) {
      const encrytchar = getEncryptedChar(codeForA, letter, shift);
      encrytArray.push(encrytchar);
    } else {
      encrytArray.push(letter);
    }
  });
  const encrytString = encrytArray.join("");
  return encrytString;
}

function getEncryptedChar(code, letter, shift) {
  const characterCode = letter.charCodeAt(0);
  const position = characterCode - code;
  const charCode = (position + shift) % 26;
  const encrytCode = charCode + code;
  return String.fromCharCode(encrytCode);
}
