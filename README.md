# Focal Length

A simple NPM module for calculating the effective focal length given crop factor of camera and focal length of a lens.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

There are no prerequisites for this project.

### Installing
  npm i --save focal-length

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
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

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
