// Array methods

// let a=["naseem","bano","aliya","faryal"];
// let newarr=[];





// a.forEach((val)=> newarr.push(val))  
//     console.log(newarr);
    

    // for each loop does not return any thing
//    example 

let s=[1,2,3,4,5]

function each(val) {
   let result= val * 2
   return result
//    console.log(result);
   
}

s.forEach(each)  
//  here for each dont return any array

// difference between foreach and map
// both are same in many aspects but however in some reasons they differ from each other
// map return with new array iterating over each and every value but foreach loop dont return any array after iterating over each and every value