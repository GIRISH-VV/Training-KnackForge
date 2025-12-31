//-----------Function
function power(a,b){
    return a*b;
}
console.log(power(2,3));

//Function Expression
let arr=[1,2,3,4,5];
let ex = arr=>{
    let sum=0;
    for(let x of arr){
        sum+=x;
    }
}
console.log(ex(arr))


//arrow function
let multiply = (a,b) => a*b;
console.log(multiply(3,4));

let volume = (l,b,h) => {l*b*h};
console.log(volume(2,3,4));

//For Each
let arr1 = ["apple","banana","mango"];
arr1.forEach(print);

function print(val){
    console.log(val);
}

//foreacharrowfunction
arr1.forEach(val => console.log(val));

function add(a,b){
    console.log(a+b);
    function sub(c,d){
        console.log(c-d);
    }
    sub(5,3)
}
console.log(add(5,10))

//filter
let arr2 =[1,2,3,4,5];
arr2.filter(x => x%2==0)
 console.log(x);





 