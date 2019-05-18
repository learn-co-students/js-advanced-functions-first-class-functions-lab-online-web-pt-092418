// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  const firstTwo = [...array.slice(0,2)]
  return firstTwo

}

const returnLastTwoDrivers = function (array) {
  const lastTwo = [...array.slice(-2)]
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (array, funct) {
  return funct(array)
}
