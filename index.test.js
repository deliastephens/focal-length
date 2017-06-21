const index = require('./index');

const FOCAL_LENGTH = 35;
const CROP_FACTOR = 1.5
const NEW_FOCAL_LENGTH = FOCAL_LENGTH * CROP_FACTOR;

test(
  `calculates effective focal length by multiplying crop factor (${CROP_FACTOR} by focal length (${FOCAL_LENGTH}))`, 
  () => {
  expect(index.calcNewFocalLength(CROP_FACTOR, FOCAL_LENGTH)).toBe(NEW_FOCAL_LENGTH);
});
