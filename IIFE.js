//1.print odd number in array
// ( function (brr)
//    {
//     for(var i=0; i<brr.length; i++)
//     if(brr[i]%2===1)
//     {
//         console.log(brr[i]);
//     }
// })
// ([1,2,3,4,5,6,7,8,9,10]);

//2.convert all the string to title caps in string array
// ( function(str){
//     var brr = str.split(" ");
//      for( var i=0; i<brr.length; i++)
//      brr[i] = brr[i].charAt(0).toUpperCase() + brr[i].slice(1);
//      console.log(brr.join(" "));
      
// })
// ("I'm a little tea pot");

//3.Sum of all numbers in array
// ( function(add){
//     let sum = 0;
//          for(var i=0; i<add.length; i++)
//         sum=sum+add[i];
//        console.log(sum);
// })
// ([1,2,3,4,5,6,7,8,9,10]);

//4.Return all the prime number in an array
// (function(n){
// var numArray = n.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
//   });
// console.log(numArray.join(" "));
// })
// ([2, 3, 4, 5, 6, 7, 8, 9, 10]);

//    
//

//5.Return all the palindrome in an array
// ( function (name){
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
// })
// ("syeys");

//7. Remove duplicates from the array
// ( function (name) {
//     let char = name.split("");
//     let char1 = new Set(char);
//      console.log(char1);    
//     })
//  ("abcbadcde");

//8. Rotate an array by k times
// ( function (k) {
//     let arr = "12345".split("");
//     for(var i=0; i<k; i++)
//     {
//      arr.unshift(arr.pop());
//      }
//     console.log(arr.join(" "));
//     })
// (2);