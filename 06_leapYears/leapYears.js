const leapYears = function(year){
  
    //console.log(year%4);
    if(year%4 == 0 && year%100 != 0 || year%400==0){
      return true;
      //console.log("true");
    }  
    else //console.log("false");
    return false;
    
    //console.log((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));
  };
  
// Do not edit below this line
module.exports = leapYears;
