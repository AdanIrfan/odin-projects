export function makeCapitalize(word) {
  const parsedWord = word.trim();
  if (parsedWord === "" || typeof parsedWord !== "string") {
    return;
  }
  let wordArray = parsedWord.split("");
  wordArray = wordArray.map((letter) => letter.toLowerCase());
  wordArray[0] = wordArray[0].toUpperCase();
  const capitalizeWord = wordArray.join("");
  return capitalizeWord;
}
