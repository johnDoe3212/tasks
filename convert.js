function numToStr(num) {
  return num.toString();
}

function stringToNumber(str) {
  
  let num = Number(str); 

  if (typeof num === 'bigint') {
    return num.toLocaleString('en-US');
  } else if (typeof num === 'number') {
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 20 });
  }
}
