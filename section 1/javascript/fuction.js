function addNums(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
    
}
addNums(10,20)
addNums(10,2)

// 2nd Way
const getAvg = function(n1, n2, n3){
    const avg = (n1+n2+n3)/3;
    return avg;
}
const result = getAvg(10,20,30);
console.log(result);
// 3rd way
// Arrow function
const factorial = (num) => {
    let f = 1;

    for(let i=1; i <= num; i++){
        f = f*i;
    }
    return f;
}
const fact = factorial(5);
console.log(fact);
// WAP to find if a number is even or odd using a function 
const isEven = (n) => {
     if (n%2==0){
        return `${n} is an even number`;
     } else {
        return `${n} is an Odd number`;
     }
} 
const evenOddResult = isEven(45);
console.log(evenOddResult);
//WAP to if a number is divisbile  by 15 and 5 or not using a function
function divNums(num){
if (num%15==0 && num%5==0) {
    console.log("is Divisble");
    
    
} else {
    console.log("is not Divisble");
    
}
}
divNums(20)

// Wap to check for the numbers that are divisible by 17 in the range of 97 to 247.
const seventeen =() => {
for(let i = 97;i <= 247;i++){
    if(i % 17 ===0){
        console.log(i);
        
    }
 }
}
seventeen();
// WAP to find the sum of all even numbers in the of 1 to 100 using a function.

sum = 0;
const evenNums =() => {
    for(let i =1;i <=100;i++){
        if(i % 2 ===0){
            sum = sum + i;
            console.log(sum);
            
        }
    }
}
evenNums();
