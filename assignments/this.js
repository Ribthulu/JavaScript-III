/*jshint esversion: 6 */

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding binds "this" to the window object, effectively calling all of the javascript that is tied to each piece of code
* 2. implicit binding binds "this" to the object before the dot when calling a function and is implicit because you're not outright
     defining what "this" binds to when calling it
* 3. new binding is used for constructor functions and the new keyword
* 4. explicit binding are similar to implicit, however the vagueness is removed thanks to the apply, bind, and call methods

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function one(x) {
//   console.log(this);
//   return "Hello " + x;
// }
// console.log(one("jupiter"));
// Principle 2

// code example for Implicit Binding
// const two = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: function(value3){
//     console.log(this);
//     return "this is " + value3;
//   }
// };
// console.log(two.prop3("an implicit Binding"));
// Principle 3

// code example for New Binding
// function Three(y){
//   this.one = y.one;
//   this.two = y.two;
//   this.three = y.three;
// }
// Three.prototype.whoa = function(){
//   return `${this.one} + ${this.two} + ${this.three}`;
// };
// const example = new Three({
//   one: "what",
//   two: "is",
//   three: "this?"
// });
// console.log(example);
// console.log(example.whoa());
// // Principle 4
//
// // code example for Explicit Binding
// const POTUS = {
//   name: "Donald",
//   age: 174,
//   default: function(){
//     return `I did not collude with Russia and I am the greatest president ever`;
//   }
// };
// const family = ["Evanka", "Don Jr", "Melania"];
// function showtime(x,y,z){
//   return `My fellow Americans, I am ${this.name} and I did not collude with Russia, just ask ${x} or ${y} or ${z}`;
// }
// console.log(showtime.apply(POTUS,family));
