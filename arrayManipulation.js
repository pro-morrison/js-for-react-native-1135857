function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  
}

// Example usage:
console.log(processArray([5,4,3,7,8,1,6])); 