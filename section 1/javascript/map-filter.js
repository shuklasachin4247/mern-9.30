const nums = [8,3,7,8,9,4,6,5,2,];

const sqr = nums.map((n) => {
    return n*n
})

console.log(sqr);

const prices =[246,346,446,546,646]

const gst = prices.map((p) => {
    return p + (p * 0.18)
})

console.log(gst);

const prices2 = ['₹742.23', '₹125.65', '₹85.2', '₹999.99', '₹628.37'];

const intPrice = prices2.map((p) => {
    return parseInt(p.slice(1))
})
console.log(intPrice);

// filter

const even = nums.filter((n) => {
return n % 2 === 0
})
console.log(even);

const five = prices.filter((p) => { return (p >= 500)})
console.log(five);

// questions

const brands = ['Apple', 'Samsung', 'Oneplus', 'Sony', 'LG'];

const upper = brands.map((b) => {
    return b.toUpperCase();
})
console.log(upper);

const names = ['Ayushman', 'Sachin', 'Neha', 'Harsh', 'Saloni', 'Shashank']

const longName = names.filter((n) => {
    return n.length > 5
})
console.log(longName);

const decimal = [2.5, 3.14, 1.618, 5.20]

const int = decimal.map((i) => {
    return parseInt(i)
})

console.log(int);
