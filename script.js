//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array

  function printOdd(){
      let arr = [1,2,3,4,5,6,7,8,9];
      let result = [];
      arr.forEach(val =>{
          if(val % 2 != 0){
              result.push(val);
          }
      })
      console.log(result);
  }
  printOdd()

  //Convert all the strings to title caps in a string array
  function converStringTitleCaps(){
      let arr = ['jakir','alina','vahab','zarina','karina'];
      let res = []
      arr.forEach(val =>{
          if(typeof(val) == 'string')
          {
              res.push(val.charAt(0).toUpperCase() + val.substring(1))
          }
      })
      console.log(res);
  }
  converStringTitleCaps();

  //Sum of all numbers in an array
  function sumArr(){
      let arr = [1,2,3,4,56,7,7,8];
      let sum = 0;
      arr.forEach(val =>{
        sum += val;
      })
      console.log(sum);
  }
  sumArr();

  //Remove duplicates from an array
  function removeDupArr(){
    let chars = ['A', 'B', 'A', 'C', 'B'];

    let uniqueChars = chars.filter((c, index) => {
        return chars.indexOf(c) === index;
    });
    console.log(uniqueChars);
  }
  removeDupArr()

  //Return all the prime numbers in an array
  function primeArr(){
      let arr = [1,2,4,5,6,7,19,23,45];
      let i = 2;
      let res = [];
      arr.forEach(val =>{
          if(val == 1){
              console.log('1 is neither prime nor composite number')
          }
          else if(val > 1){
              if(val % i != 0){
                res.push(val);
                
              }
              else{
                  console.log(val+' is not a prime number')
              }
              i++;
          }
      })
      console.log(res)
  }
  primeArr()

  //Return all the palindromes in an array
  function isPalindrome() {
    let arr = ['noon','lol','bear','bob','javascript'];
    let res = [];
    arr.forEach(val =>{
        val == val.split("").reverse().join("") ? res.push(val) : ''
    })  
    console.log(res);
 }
 isPalindrome();

 //Return median of two sorted arrays of the same size
 function median(){
     var a = [3,56,8,9,7];
     var b = [2,16,14,80,6];
     var c = a.concat(b);
    let d = c.sort(function(a, b) {
        return a - b;
      });
    if(d.length % 2 == 0){
        let m1 = d.length/2, m2 = d.length/2 + 1;
        let median = Math.floor(d[m1] + d[m2] / 2);
        console.log(median)
    }
    else
    {
        console.log('To get median array size should be same')
    }
    
 }
 median();


 //rotate an array k times
 const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }

  console.log(rotateArray1([2,3,4,5,6,7],3))