
"use strict"
function findmax(a,b){
if (a>b){
return a;
}else{
    return b;
}
}
console.log(findmax(10,20));
function comparator(a,b){
    return a-b;
}

function findmaxofThree(...args){
    return args.sort(comparator).reverse()[0];
}

console.log(findmaxofThree(1,2,3));
console.log(findmaxofThree(100,8,3,87,101,99,2000));

function isVowel(c){
    if(c=="a"|| c=="u" || c == "i" || c=="o" || c=="e"){
    return true;
}else{
    return false;
}}
 console.log(isVowel("a"));

function sumOf(...arr) {
    let result = 0;
    for (let num of arr) {
      result += num;
    }
    return result;
  }
console.log(sumOf(1,2,3,4));
  
function multiplyOf(...arr) {
    let result = 1;
    for (let num of arr) {
      result *= num;
    }
    return result;
  }
console.log(multiplyOf(1,2,3,4));
  
function reverseString(str){
   let rev = "";
   for(let i=str.length-1; i>=0; i--){
    rev += str[i];
   }
   return rev;
    
}
console.log(reverseString("dog is ellu"));

function  findLongestWord(...args){
 return args.sort((a,b)=>a.length-b.length).reverse()[0].length;
}
console.log(findLongestWord("dog","cat","bird","hanuka"));

function  filterLongWords(arr,i){
  return arr.filter(x=>x.length>i);
}
console.log(filterLongWords(["dog","cat","bird","hanuka","shewit"],4));

function computeSumOfSquares(...args){
    return args.reduce((a,b)=>a+b*b,0);

}
console.log(computeSumOfSquares(1,2,3));

function printOddNumbersOnly(...args){
    args.filter(x=>x%2!=0).forEach(y=>console.log(y));

}
printOddNumbersOnly(1,2,3,4);

function computeSumOfSquaresOfEvensOnly(...args){
    return args.filter(x=>x%2==0).reduce((a,b)=>a+b*b,0);

}
console.log(computeSumOfSquaresOfEvensOnly(1,2,3,4,5,6));
function sum(...args){
    return args.reduce((a,b)=> a+b,0);
 }
 console.log(sum(1,2,3,4))

function multiply(...args){
   return args.reduce((a,b)=> a*b,1);
 }
 console.log(multiply(1,2,3,4));


function printFibo(n, a, b) {
    let fib = [a, b];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i-1] + fib[i - 2];
    }
    return fib.join(", ");
  }
  console.log(printFibo(2, 0, 1));

  function isVowel(chr) {
    if (chr.length != 1) {
        alert("give me a charachter");
        return;
    }
    if ("AEIOUaeiou".includes(chr)) return true;
    else false;
}

function Vowel(args){
  let y=['a','i','o','u','a','A','E','I','O','U'];
  let x = "aieou";
  if("aieou".includes(args.toLowerCase())){
    return true;
  }else{
    return false;
  }
}
console.log(Vowel('c'));

function findSecondBiggest1(...args){
  return args.sort((a,b)=>a-b).reverse()[1];
  
}
console.log(findSecondBiggest1(1,2,3,4,6,8));
                        


