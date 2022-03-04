const removeFromArray = function(arr, ...args) {
    /*
  for (let c in arr){
    console.log(arr[c]);
  }*/
  //console.log(args);
  //console.log(arr);
  
  for(let i = 0; i< arr.length; i++){
    //console.log(arr[i]);
    for(let j = 0; j< args.length; j++){
      //console.log("i "+i+"--"+ arr[i]);
      //console.log("j ---"+j+"--"+args[j]);
      if(arr[i]===args[j]){
        //console.log("match");
        arr.splice(i,1);
        i--;
      }
    }
  }
  //console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
