//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//this allows methods (functions inside of objects) to interact with the function that was invoked.

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//1. When you invoke a function declaration or a function expression the this keyword will be bound 
//to the global object, which in the browser is the window object.
//2. Method invocation (Implicit binding) - When you invoke a method the this value will be bound to that object.
//3. Explicit binding - We can explicitly set what the this keyword will be bound to using one of the following: ´.call()´, ´.apply()´, ´.bind()´.
//4. Constructor invocation (New binding) - The fourth and final rule.
//When a function invocation is proceeded by the new keyword this will be bound to the newly created object.

// 3) What is the difference between call and apply?

//They both work similarly. Apply takes in arrays that will be used in the second argument. 
//Apply will also take in an array and break that up to be used as multiple arguments.

// 4) What does .bind do?

//.bind makes it possible to invoke parts of a function and get the information that you want out of them.


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
  username: "hotmama",
  email: "hotmama@gmail.com",
  getUsername: function () {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

//Function Invocations Here

function Car(make, model, year) {

  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;

  this.moveCar = function () {
    return  this.move += 10;

  }

}


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment 
//the move property by 10. The move property will be added to every object that is being returned from the Car function.
// You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function () {
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects.
// *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here

getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function () {
  return this.username;
};

var userName = getMyUsername.apply(myUser); 

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)

  //'iliketurtles'

//In the example above, what is the 'this keyword' bound to when getMyUsername runs? myUser.username




//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

