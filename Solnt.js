/**
 * Consider a given string S consisting of N letters "a"and or "b"
 * Write a function that returns 1 when all the occurences of letter "a" are 
 * are before all occurences of letter "b" andreturns 0 otherwise 
 * 
 * 
 * 
 * We need a function that splits a string and checks all the letters
 * of the strings that consist of just letters "a" and "b"
 * if an "a" appears first then the function returns a 1
 * if a "b" appears first then the function return a 0 
 * 
 * Note that 
 * if S = "aabbb" , the function should return 1
 * if S = "ba", the function should return 0
 * if S = "aaa", the function should return 1 [Note that "b" does not need to occur in the string ]
 * if S = "b" ,the function should return 1 [Note that "a" does not need to occur in S]
 * if S = "abba" , the function should return 0
 * 
 */


function letterFinder (string) {
    let foundB = false;

    for (let i = 0 ; i < string.length; i++) {
        if (string[i] === "b"){
            foundB = true;
        } else if (string[i] === "a" && foundB) {
            return 0;
        }
    }
    return 1;
}

// test case
console.log(letterFinder("aabbb"));  // Output: 1
console.log(letterFinder("ba"));     // Output: 0
console.log(letterFinder("aaa"));    // Output: 1
console.log(letterFinder("b"));      // Output: 1
console.log(letterFinder("abba"));   // Output: 0

/*
function checkOrder(S) { 
    let aFound = false; 
    let bFound = false;
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'a') {
        { aFound = true; } 


     } else if (S[i] === 'b' && aFound){
        { bFound = true; }


     } else if (aFound && !bFound) {
             return 1; 

         } else  (!aFound && bFound) 
         { return 0;}
        }

    console.log(checkOrder("aabbb")) // return 1
    console.log(checkOrder("ba")) // return 0
    console.log(checkOrder("aaa")) // return 1
    console.log(checkOrder("b")) // return 1
    console.log(checkOrder("abba",)) // return 0

    }
*/