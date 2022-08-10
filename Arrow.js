//1.print odd number in array
// var arr = (brr) =>{
//     for(var i=0; i<brr.length; i++)
//     if(brr[i]%2===1)
//     {
//         console.log(brr[i]);
//     }
// }
// arr([1,2,3,4,5,6,7,8,9,10]);

//2.convert all the string to title caps in string array
// var arr = (str) =>{
//     var brr = str.split(" ");
//      for( var i=0; i<brr.length; i++)
//      brr[i] = brr[i].charAt(0).toUpperCase() + brr[i].slice(1);
//      console.log(brr.join(" "));
//      return brr
      
// }
// arr("I'm a little tea pot");

//3.Sum of all numbers in array
// var arr = (add) =>{
//     let sum = 0;
//          for(var i=0; i<add.length; i++)
//         sum=sum+add[i];
//        console.log(sum);
// }
// arr([1,2,3,4,5,6,7,8,9,10]);

//4.Return all the prime number in an array
// var arr = (prime) => {
//     for(var i=0; i<prime.length; i++ )
//     if(prime[i]%2==0)
//     {
//     console.log(prime[i]);
//     }
//     }
// arr([1,2,3,4,5,6,7,8,9]);

//5.Return all the palindrome in an array
// let palindrome = (name) => {
//     let arr = name.replace(/ /g,"").toLowerCase().split("");
//     let brr = arr.slice().reverse();
//     let crr = arr.join("");
//     let drr = brr.join("");
//       if(crr === drr){
//         console.log("Given string is Palindrome");
//       }
//       else
//       {
//         console.log("Given string is Not Palindrome")
//       }
// }
// palindrome("syeys");

//7. Remove duplicates from the array
// let duplicate = (arr) => {
//     let char = arr.split("");
//     let char1 = new Set(char);
//     console.log(char1);
//     }
//  duplicate("abcbadcde");

//8. Rotate an array by k times
// let rotate = (k) => {
//     let arr = "12345".split("");
//     for(var i=0; i<k; i++)
//     {
//      arr.unshift(arr.pop());
//      }
//     console.log(arr.join(" "));
//     }
// rotate(1);