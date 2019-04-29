// Code your solution in this file!

const returnFirstTwoDrivers =
  function (drivers) {
  return drivers.slice(0, 2);
  
};


const returnLastTwoDrivers =
function(drivers) {
  return drivers.slice(-2);
  
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = 
   function (value) {
     return function (num) {
       return value * num 
     }
   }
    
const fareDoubler =
  function (value) {
     return value + value
   }
  
const fareTripler =
  function (fare) {
  return fare * 3
  }

const fetchSpecifiedDrivers =
  function (drivers, fn){
    return fn(drivers);
 }
