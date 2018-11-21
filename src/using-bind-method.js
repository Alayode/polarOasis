/**
 * CHris SAMuel
 * using-bind-method.js
 * 
 * For Understanding purposes.
 * 
 */

 /**
  * The bind() Method was added in ECMAScript 5, but it is easy to simulate
  * in ECMAScript 3. As its name implies the primary purpose of
  * bind() is to bind a function to an object.
  * 
  * In JavaScript when you invoke the bind() method on a
  * function f and pass an object o , the method returns a 
  * new function. Invoking the new function (as a function)
  * invokes the original function f as a method of o.
  * 
  * Any arguments you pass to the new function are passed to the original function.
  * 
  */


  var x = 9;

  function f(y) { return this.x + y; }
  // This function needs to be bound

  var o =  { x : 1 };
  /*An object we'll bind to  */
  
  var g = f.bind(o); // Calling g(x) will now invoke o.f(x)
  
 console.log(g());
 
 
