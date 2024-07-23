function numToStr(num) {
  return num.toString();
}

function stringToNumber(str) {
  let num = Number(str); 

  return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 20 });
}
