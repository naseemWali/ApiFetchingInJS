// Array methods

// let a=["naseem","bano","aliya","faryal"];
// let newarr=[];





// a.forEach((val)=> newarr.push(val))  
//     console.log(newarr);
    

    // for each loop does not return any thing
//    example 

// let s=[1,2,3,4,5]

// function each(val) {
//    let result= val * 2
//    return result
// //    console.log(result);
   
// }

// s.forEach(each)  

//  here for each dont return any array

// difference between foreach and map
// both are same in many aspects but however in some reasons they differ from each other
// map return with new array iterating over each and every value but foreach loop dont return any array after iterating over each and every value

// map method in array
// let s=[1,2,3,4,5]

// function naseem(value) {
//     console.log(value);
    
// }


// s.map(naseem)

//  second example
// let s=[1,2,3,4,5]
// let arr=[]
// s.map((val)=>arr.push(val))
// console.log(arr);

// third example

// let s=[1,2,3,4,5]
// s.map((val,i,arr)=>{
//     console.log(val,i,arr);
    
// })

// includes method
// it will return true if it exits returning its index and false if it not exists

// let array=[1,2,3,4,5]
// const res=array.includes(2)
// console.log(res);


// find
// find gives  the first whole element  if it is true and undefine it it not exists

// let arrays=[2,4,6,8]

// let ans=arrays.find((value,i,array) => value>3);
// console.log(ans);

// another method

// let arr=[1,2,3,4,5,6]
// const answer=arr.find((val,i,array) => {
// return val>6
// }   
// )
// console.log(answer);

// findIndex method
// findindex method returns index of that element if condition is true and return undefine if not

// let names=['naseem','alina','rahmeen','sabreen']
// let a=names.findIndex((val)=>{
//    return val==='sabreen'
// })
// console.log(a);

// second example

// let boys=[1,2,3,4,5];
// let response=boys.findIndex((val)=>{
// return val>5
// })
// console.log(response);


// Filter method
// let nums=[1,2,3,4,5,6,7,8,9,10]
// let answer=nums.filter((val)=>{
//    return  val>8
// })
// console.log(answer);

