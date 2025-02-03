//var old - > Global Scope
var a = 10;
a = 20;
var a = 50; // can redeaclare
console.log(a);

//Let ES+6 -> Block Scope
// Reassign is available but declare again ugin same name
let b = 1;
console.log(b);
b = "Prasad";
let b = 5; // cannot Redeclare
console.log(b);

//COnst ES+6 - > Block Scope and Cannot be Reassigned
const c = 2;
c = "Malvi"; // Throws Error Assignment to a constant variable
const c = 50; // Cannot Redeclare
console.log(c);
