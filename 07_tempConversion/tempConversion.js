const ftoc = function(far) {
  let c = (far-32)*(5/9);
  c = Math.round(c * 10) / 10;
  //console.log(c);
  return c;
};

const ctof = function(cel) {
  let f = cel* (9/5) +32;
  f = Math.round(f * 10) / 10;
  //console.log(f);
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
