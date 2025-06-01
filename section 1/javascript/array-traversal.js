const arr = [10, 21, 61, 51,36,75,96,953,85,];

//For loop

for (let i = 0; i <arr.length; i++) {
    // console.log(arr[i]);
}

// For...of Loop

for(let i of arr){
    // console.log(i);
}

// ForEach loop

arr.forEach((a,b,c)=>{
    // console.log(a,b,c);
    
})

const sqr =[];
arr.forEach((e)=>{
    sqr.push(e*e);
})
// console.log(sqr);

//Wap to find the even numbers in the array  using forEach.

const even =[];
arr.forEach((a)=>{
if (a%2==0) {
//   console.log(a);
    
}
})

const prices =[246,346,446,546,646]

// Wap to find the sum of all  the prices.

let sum = 0;
prices.forEach((a)=>{
    sum+=a;
        
    }
)
//  console.log(sum);

// Wap to find the average of all the prices.

let avg = sum/prices.lenth;
prices.forEach((p)=>{
});
// console.log("avg of prices is "+avg);

// Wap to find the prices greater of all the prices.

const greaterthan600=[];
prices.forEach((p) => {
    if(p>600){
        greaterthan600.push(p);
        }
});
// console.log(greaterthan600);

// Add 18% gst to all the prices and store the new prices in a new arry.

const gst =[];
prices.forEach((p)=>{
    gst.push(p+(p * 0.18));
})
//    console.log(gst);
   
//Add 12% discount to all the prices and store the new prices in a new array.

const dis =[];
prices.forEach((p)=>{
    dis.push(p-(p * 0.12));

})
    console.log(dis);
    





