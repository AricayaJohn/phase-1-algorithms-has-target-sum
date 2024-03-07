
//[3, 8, 12, 4, 11, 7] and the target is 10
function hasTargetSum(array, target) {
  // itterate each number in the array 
  for(let i = 0; i < array.length; i++) {
//and identify a complement that adds to target. (comp = target - num)
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++ ) {
  //itterate if any number is our complement if so, return true
      if (array[j] === complement)
      return true;
}
}
 // if I reach the end of the array, return false
return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ 
// 1) make a function  called hasTargetSum that checks if two numbers from the array add up to some target.
// 2) for example if [1 ,2,34] and if target is 6 It should return 2 and 4 add to 6
// 3) check if there is a number that adds up to target

// itterate each number in the array 
//and identify a complement that adds to target. (comp = target - num)
  //itterate if any number is our complement if so, return true

  // if I reach the end of the array, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
