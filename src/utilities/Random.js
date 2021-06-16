/**
 * Return a random integer between the given minimum and maximum values,
 * inclusive.
 *
 * @param {number} [minimum=0]
 * @param {number} [maximum=1]
 *
 * @return {number}
 */
export function getRandomInteger(minimum = 0, maximum = 1) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function getRandomBoolean() {
  return Boolean(getRandomInteger(0, 1));
}
