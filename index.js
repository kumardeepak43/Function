console.log("working!!!");
//Q-1 Create one function with zero parameter having a console statement;
function zeroFun(){
    console.log("Function zero parameter having a console statement..");
}
//Q-2 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    return a+b;
}
add(3,4)//values

//Q-3 Create one arrow function
 const addFunc = (a,b)=> a+b;
    
 addFunc(3,4) // calling function
 //Q-4 "Print output: 
var x = 21;
var girl = function () {// function expression
    var x = 20;
    console.log(x);
    
};
girl ();

//Q-5 "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
girl()

// Q-6 "Print output

var x = 21;


console.log(x);
let a = function() {
    
   x = 20;
  console.log(x);
};
a(); 
let b = function() {
    
    x = 40;
   console.log(x);
};
b();
 // Q-7Write a function that accepts parameter n and returns factorial of n
 function factorial(n){
    if (n==0){
        return 1;
    }
    return n = factorial(n - 1); 
}
factorial(5)