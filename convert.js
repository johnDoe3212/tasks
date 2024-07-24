function numToStrToBigInt(num) {
  let str = num.toString();  
  let [int, rest] = str.split(',');
  let crazyBigInt = BigInt(int).toLocaleString('en-US');
    
  if (rest) {
    rest = rest.substring(0, 2);
  }
    
  return `${crazyBigInt}.${rest}`
}
