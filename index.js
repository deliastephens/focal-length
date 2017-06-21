/* Calculates focal length given the crop factor of camera
  and focal length of lens
*/
exports.calcNewFocalLength = function(cropFactor, focalLength) {
  return cropFactor * focalLength;
}
