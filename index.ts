/**
 * Generates number with its corrisponding suffix.
 * @param {number} num - Number to convert
 * @returns {string} - Number with suffix
 */
const ordinalSuffix = (num:number) => {
  const numString = String(num);
  const lastNumber = Number(numString[numString.length-1]);
  const secondToLastNumber = Number(numString[numString.length-2]);
  const isTeen = numString.length > 1 && secondToLastNumber === 1;

  if (!isTeen && lastNumber === 1) {
    return `${num}st`;
  } else if (!isTeen && lastNumber === 2) {
    return `${num}nd`;
  } else if (!isTeen && lastNumber === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

export { ordinalSuffix };
