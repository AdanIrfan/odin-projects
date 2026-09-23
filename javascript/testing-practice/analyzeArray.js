export function analyzeArray(arr) {
  function average() {
    const sum = arr.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
    const avg = sum / arr.length;
    return avg;
  }
  function min() {
    const min = arr.reduce((pre, cur) => {
      if (pre < cur) {
        return pre;
      } else {
        return cur;
      }
    }, arr[0]);
    return min;
  }
  function max() {
    const max = arr.reduce((pre, cur) => {
      if (pre > cur) {
        return pre;
      } else {
        return cur;
      }
    }, arr[0]);
    return max;
  }
  function length() {
    return arr.length;
  }

  return { average: average(), min: min(), max: max(), length: length() };
}
