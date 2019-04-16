// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  // return [drivers[0], drivers[1]]
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  // return [drivers[(drivers.length)-2], drivers[(drivers.length)-1]]
  return drivers.slice(-2)
}

// debugger
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 // const selectingDrivers = [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)];

const createFareMultiplier = function(num) {
    return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(drivers, selectDrivers) {
  return selectDrivers(drivers);
}
