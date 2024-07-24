function numToStr(num) {
  return num.toString();
}

function stringToNumber(str) {
  
  if (typeof str === 'bigint') {
    return num.toLocaleString('en-US');
  } else if (typeof str === 'number') {
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 20 });
  } else if (typeof str === 'string') {
    
    let [int, rest] = str.split(',');
    let crazyBigInt = BigInt(int).toLocaleString('en-US');
    
    if (rest) {
      rest = rest.substring(0, 2);
    }
    
    return `${crazyBigInt}.${rest}`
  }
}
