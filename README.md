# Focal Length

A simple NPM module for calculating the effective focal length given crop factor of camera and focal length of a lens.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project uses [jest](https://facebook.github.io/jest/)
for testing:

```
npm i --save jest
```

### Installing
```
npm i --save focal-length
```

## Running the tests

This system uses [Jest](https://facebook.github.io/jest/) for testing.

### Installing Jest
To install Jest, run
```
npm install jest
```
We only have one test, which verifies that calcNewFocalLength is returning the correct value and type of value. To run this test, type:

```
npm test
```

## Deployment

To calculate the effective focal length for a crop factor and focal length:

```
const focalLength = require('focal-length');
const cropFactor = YOUR_CROP_FACTOR;
const focalLength = YOUR_FOCAL_LENGTH;

focalLength.calcNewFocalLength(cropFactor, focalLength);
```

## Authors

* **Delia Stephens** - *Initial work* -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
