Write a console.log statement saying "Hello World!" for each language that you know.
For example:
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
solution

var sayHello = 'Halo, dunia'; // Indonesian
console.log(Halo, dunia);
sayHello = 'Halo, dunia'; //Italian
console.log(Halo, dunia);
sayHello = 'Hola, mundo';  // Spanish
console.log(Hola, mundo)
sayHello ='hello world'; //english
console.log(hello,world)


console.log("I'm awesome");




/* 3. Declare a variable x and initialize it with an integer, using these exact steps:
3.1 First, declare your variable x (do not initialize it yet).
3.2 Add a console.log statement that explains that explains in words what you think the value of x is  */

var x=67;
console.log('the value of my variable x will be: number ');
console.log(x);
x=45.89;
console.log('the value of my variable x will be: number');
console.log(x);

/* 4. Declare a variable y and assign a string to it.
4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
4.2 Now console.log the variable y.
4.3 Now assign a new string to the variable y.
4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.
4.5 Now console.log y again. */

var y = 'HYF';
console.log('4. the value of my string will be: HYF');
console.log(y);
y = 'WEEK2 JAVA SCRIPT';
console.log('4. the value of my string will be: WEEK2 JAVA SCRIPT ');
console.log(y);


/* 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 Console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 Console.log a.
5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
5.6 Console.log the highest value. */ 

let z =7.25;
console.log('5. Value before use of round function =' + z); 
let a = Math.round(z);
console.log('5. Value after using the round function =' + a);
var highestValue = Math.max(z,a);
console.log('5. highestValue ' + highestValue);


/* 6. Arrays!
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)
6.2 Write a console.log statement that explains in words what you think the value of the array is.
6.3 Console.log your array.
6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
6.5 Log your array.
6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
6.7 Log your new array! */
 
 var myArrays = [ ];
console.log('6. the value of array will be: Null');
console.log(myArrays);
myArrays = ['Horse', 'cow', 'donkey','tiger'];
console.log(myArrays);
console.log(myArrays);
myArrays.push('baby pig');
console.log(myArrays);

/*7.1 Let's consider the following string: let myString = "this is a test".
7.2 Add the string to your file and console.log it.
7.3 Find a way to get the length of myString.
7.4 Console.log the length of myString. */
 
let myString = "this is a test";
console.log(myString);
console.log('myString length is ');
console.log(myString.length);
 

/* 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value
 
let foo = 3;
console.log('The value of my variable foo is: ' + foo);
(Curious to know what a foo is? Check this article on WikiPedia.)
 
8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type. */
 
let fooint = 5;
console.log('8. The value of my variable foo is number: ' + fooint);
console.log(typeof fooint);
 
let fooFloat = 3.46;
console.log('8. The value of my variable foo is number: ' + fooFloat);
console.log(typeof fooFloat);
 
let foostring = 'foocafe';
console.log('The value of my variable foo is string: ' + foostring);
console.log(typeof foostring);
 
let fooBool = true ;
console.log('8. The value of my variable foo is boolean : ' + fooBool);
console.log(typeof fooBool);
 
let foo_obj = {food: "Pulao ", Cuisine: "Indian"};
console.log('The vlue of my variable obj is: object ' + foo_obj.food, foo_obj.Cuisine);
console.log(typeof foo_obj);
 
if (typeof fooint == typeof foostring)    console.log('8. typeof fooint == typeof foostring  SAME TYPE');
else console.log('8. typeof fooint == typeof foostring  not same type');
 
if (typeof fooFloat == typeof fooint)    console.log('8. fooFloat == typeof fooint SAME TYPE');
else console.log('8. typeof fooFloat == typeof fooint  not same type');
 


/* 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
9.1 Add at least 3 console.log statements in which you show that you understand what % does. */
  
var rem = 7;
rem = 7%3;
console.log(rem);
 
rem = 56;
rem =rem % 3;
console.log(rem);
             
rem = 90.45;
rem =rem % 3.0;
console.log(rem);
 
/* 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this? */
 
var multipleArray = [];
 
multipleArray = ['Horse', 2, 'donkey',4];
console.log(multipleArray);
multipleArray = multipleArray.concat(['baby pig' , 4.5]);
console.log('the value of array will be:' + multipleArray );
console.log(multipleArray);
 
 
if(6/0 === 10/0) {
  console.log('Infinite can be compared!');
}
else {
  console.log(6/0 === 10/0);
}
console.log(6/0 === 10/0);