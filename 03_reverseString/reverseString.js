const reverseString = function(newstr) {
    let strres='';
    
    for(let i=newstr.length-1; i>=0;i--){
      //console.log(newstr[i])
      strres += newstr[i];
      
    }
    //console.log(strres);
    return strres;
};

// Do not edit below this line
module.exports = reverseString;
