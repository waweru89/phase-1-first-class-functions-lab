const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); 
  };
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}
function fareDoubler(){
    return createFareMultiplier(2);

}
function fareDoubler(fare){
    return fare * 2;
}
function fareTripler(){
    return createFareMultiplier(3);
}
function  fareTripler(fare){
    return fare * 3;
}
const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
};

