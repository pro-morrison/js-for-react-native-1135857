function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  
}

// Example usage:
console.log(processArray([5,4,3,7,8,1,6])); 


function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
       return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
     
    });
}

// Example usage:
 const numbers = [5,4,3,7,8,1,6];
 const strings = ["The", "quick", "brown", "fox", "jumps", "over", "fence"];
const processedNumbers = processArray(numbers); // [ 15, 16, 9, 21, 64, 3, 36]
 console.log(formatArrayStrings(strings, processedNumbers));