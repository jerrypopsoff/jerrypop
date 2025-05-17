/**
 * Return a random integer between the given minimum and maximum values,
 * inclusive.
 */
export function getRandomInteger(minimum = 0, maximum = 1) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

/**
 * Return a random boolean value with a 50% chance of being true or false.
 */
export function getRandomBoolean() {
  return Boolean(getRandomInteger(0, 1));
}
