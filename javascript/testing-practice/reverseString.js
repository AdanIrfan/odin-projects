export function reverseString(str) {
  if (typeof str !== "string") {
    return;
  }
  if (str === "") {
    return "";
  }
  const strArray = str.split("");
  const reversedArray = strArray.reverse();
  return reversedArray.join("");
}
