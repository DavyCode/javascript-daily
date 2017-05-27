  //      var age =prompt("how old are you?");

  //    if (age < 18){

  //   console.log("you are too young to be clubbing");
  //   }else if(age < 21){
  //       
  //   console.log("you are too young to be club and drink");
  //   }else{
  //       alert("you are welcome to club and drink hard");
  //   console.log("you are too young to be club and drink hard");
  //   };

  //WORKING WITH IF ELSE STATEMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  var age = prompt("please input your age : ");

  if (age < 0) {

      alert("ERROR ERROR ERROR! please input correct age")

  } else if (age === 21) {
      alert("happy 21st birthday!!")
  } else if (Number(age) % 2 !== 0) {
      alert("your age is odd!")
  } else if (age % 2 === 0) {
      alert("perfect square");
  } else {
      alert(age);
  }






  //WORKING WITH LOOPS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!







  //WHILE LOOP





  //print all numbers between -10 and 19

  var num = -10;

  while (num < 19) {
      console.log(num);
      num++;
  }

  //print all even number between 10 and 40
  var num = 10;

  while (num < 40) {
      if (num % 2 === 0) {
          console.log(num);
      }
      num++;
  }

  // OR

  var num = 10; // this way there is even lesser looping than the previous
  while (num < 40) { // the code just loops and keeps incrementing by +2 till num is no longer less than 40
      console.log(num); // but in this case if begin with an odd number say 11, it ends up just adding +2 to the loop and we end up nt having even numbers
      num += 2;
  }



  //print all odd numbers between 300 and 333

  var num = 300;

  while (num < 333) {
      if (num % 2 === 1) { //or we could set the condition to (num % 2 !==0) which ever expression you see fit
          console.log(num);
      }
      num++;
  }


  //print all numbers divisible by 5 and 3 between 5 and 50

  var num = 5;

  while (num < 50) {
      if (num % 5 === 0 && num % 3 === 0) {
          console.log(num);
      }
      num++;
  }




  // A LITTLE ANNOYING PROGRAM ASKING THE USER TO ENTER "YES" ANYTHING ELSE JUST KEEPS ASKING ARE WE HOME YET


  var answer = prompt("Are we home yet? ");

  while (answer !== "yes") {
      var answer = prompt("Are we home yet? "); //takes the variable and prompt the user for answer so long answer is !== "yes"
  }
  alert("welcome home!!");






  // A LITTLE ANNOYING PROGRAM ASKING THE USER TO ENTER A PHRASE THAT CONTAINS THE WORD "YES" ANYTHING ELSE JUST KEEPS ASKING ARE WE HOME YET



  var answer = prompt("Are we home yet?");

  while (answer.indexOf("yes") === -1) {
      var answer = prompt("Are we home yet? "); //takes the variable and prompt the user for answer so long answer doesnot contain the word "yes"
  }
  alert("welcome home!!");







  //FOR LOOPS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




  //print all numbers between -10 and 19

  for (var i = -10; i < 19; i++) {
      console.log(i);
  }



  //print all even numbers between 10 and 40


  for (var i = 10; i < 40; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }

  }




  //print all odd numbers between 300 and 333

  for (var i = 300; i < 333; i++) {
      if (i % 2 !== 0) {
          console.log(i);
      }
  }




  //print all numbers divisible by 5 ans 3 between 5 and 50

  for (var i = 5; i < 50; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
          console.log(i);
      }

  }










  //WORKING WITH FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  // FUNCTION DECLERATION

  function actionWord(verb);


  //FUNCTION EXPRESSION

  var actionWord = function(verb) {}

  //in this case a function expression can be mixed up or changed when its variable is modified
  //for instance 

  var sayHello = function() {
      console.log("Hello world!!");
  }

  //when the value of sayHello function is changed automatically we loose our function

  sayHello = 4; //we set the funtion to equals 4
  //automatically doThat becomes 4





  //write a function isEven() takes a single numeric argument and returns true is number is even and false otherwise

  function isEven(num) {
      if (num % 2 === 0) {
          return true;
      } else {
          return false;
      }
  }

  isEven(40)

  //or!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

  function isEven(num) {
      return num % 2 === 0;
  }
  isEven(40)






  //write a function factorial which takes a single numeric argument and returns the factorial 

  //wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function fact(num) {

      var result = 1;
      for (var i = 1; i <= num; i++) {
          return num *= i;
      }
      return result;
  }
  fact(10)







  //function replaces character in a string and returns the replaced string


  function replacer(str) {
      var replaced = str.replace(/-/g, "_"); //using regular expression we replaced the char "-" with "_"
      return replaced;
  }




  //HIGHER ORDER FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  function sayHi() {
      console.log("Hello world!!");
  }

  setInterval(sayHi(), 1000); //call the function sayHi inside of setInterval at every 2000 (2 seconds)


  //!!!!!!

  setInterval(function() { //takes 2 arguments function and 2000 seconds//calls an anonymous function
      console.log("hey its a wonderful day"); //

  }, 2000);








  //WORKING WITH ARRAYS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    




  // a little todo list


  alert("Choose from the following options: New, list, quit");
  var userInput = prompt("write your plans for today"); //ask user for input
  var todoList = []; //empty array to store input



  while (userInput !== "quit") { //while-loop to loop through users input and checks if its not equal to quit

      if (userInput === "new") { //checks if user input is "new" 
          var newUserInput = prompt("enter new plans"); //prompt user for new input
          todoList.push(newUserInput); //adds user input to the array

      } else if (userInput === "list") { //checks if user input is "list"
          console.log(todoList); //prints the list of items in the array
      }
      userInput = prompt("write your plans for today"); //ask user for input again and stars the loop over 
  }
  console.log("YOU QUIT PROGRAM!!"); //quits program once user inputs quit





  //ARRAY ITIRATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  //USING FOR LOOP TO LOOP THROUGH AN ARRAY AND PRINT EACH ITEM TO THE CONSOLE

  var locations = [
      input1 = prompt("input your favourite places"),
      input2 = prompt("input your favourite places"),
      input3 = prompt("input your favourite places"),
      input4 = prompt("input your favourite places"),
  ];

  for (var i = 0; i < locations.length; i++) {
      console.log(locations[i]);

  }






  //USING forEach TO LOOP THROUGH AN ARRAY AND PRINT EACH ITEM TO THE CONSOLE

  function caller() {

      var locations = [
          input1 = prompt("input your favourite places"),
          input2 = prompt("input your favourite places"),
          input3 = prompt("input your favourite places"),
          input4 = prompt("input your favourite places"),
      ];

      locations.forEach(function(val) {
          setInterval(function() {
              console.log(val + " is the best place to be")
          }, 5000);

      })


  }
  caller()


  // we could use a callback function is this stance


  function caller() {


      function call(val) {
          setInterval(function() {
              console.log(val + " is the best place to be")
          }, 5000);

      };

      var locations = [
          input1 = prompt("input your favourite places"),
          input2 = prompt("input your favourite places"),
          input3 = prompt("input your favourite places"),
          input4 = prompt("input your favourite places"),
      ];

      locations.forEach(call) //here we used a call back function named "call" and passed it as argument for each item in the array 


  }
  caller()







  //  TODO LIST UPDATED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





  alert("Choose from the following options: New, list, quit, delete");
  var userInput = prompt("write your plans for today"); //ask user for input
  var todoList = []; //empty array to store input



  while (userInput !== "quit") { //while-loop to loop through users input and checks if its not equal to quit

      if (userInput === "new") { //checks if user input is "new" 
          addToList();
      } else if (userInput === "list") { //checks if user input is "list"
          listTodo();
      } else if (userInput === "delete") {
          deleteFromList();

      }
      userInput = prompt("write your plans for today"); //ask user for input again and stars the loop over 
  }
  console.log("YOU QUIT PROGRAM!!"); //quits program once user inputs quit




  function addToList() {
      var newUserInput = prompt("enter new plans"); //prompt user for new input
      todoList.push(newUserInput); //adds user input to the array
      console.log("New item added to the list");
  }
  //function to list todo items
  function listTodo() {
      todoList.forEach(function(val, i) {
          console.log(i + "-:" + val);
      });
  }
  //function to delete todo list items
  function deleteFromList() {
      var deleteIndex = prompt("what item idex do you want to remove from todolist");
      var deletedItem = todoList.splice(deleteIndex, 1)
      console.log(deletedItem + "has been deleted");

  }









  /*//function prints the reverse of an array !!!!!fix this

  var list = [ "is", "jesus", 55];
  var reversedItem =[];

   function printReverse(item){
                 for (var i = 0 ; i >=0; i--) {
                  var popedItem = list.pop(item);
                  reversedItem.push(popedItem);
         }
       console.log( reversedItem);
   }

  */





  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!














  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  var movie = [{
      name: "Lord of the rings",
      rating: " 5 stars",
      hasWatched: true
  }, {
      name: "Iron man 2 ",
      rating: " 4.5 stars",
      hasWatched: false
  }, {
      name: "Beauty and the beast",
      rating: " 5 stars",
      hasWatched: true
  }, {
      name: "Fifty shades of gray ",
      rating: " 3 stars",
      hasWatched: false
  }];

  movie.forEach(function(val, i) {
      if (movie[i].hasWatched == true) {
          console.log("you have seen " + "\"" + movie[i].name + "\" -" + movie[i].rating);
      } else {
          console.log("you have not seen " + "\"" + movie[i].name + "\" -" + movie[i].rating);
      }
  });


  //for a cleaner code !!!! still under review


  movie.forEach(function(val) {
      console.log(action(val)); //call the function here
  });

  function action(val, i) { //declare the function here

      if (movie[i].hasWatched == true) {
          console.log("you have seen " + "\"" + movie[i].name + "\" -" + movie[i].rating);
      } else {
          console.log("you have not seen " + "\"" + movie[i].name + "\" -" + movie[i].rating);
      }
  }










  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FIX THIS

  //write a string and return the length of the shortest word
  function checker(str) {
      var word = str.split(' ');
      var shortWord = 0;
      var shortestWord;

      function checkWord(val, i) {
          for (var i = 0; i < word.length; index++) {

              if (shortWord < val[i].length) {
                  val[i].length = shortestWord;

              }
              return shortestWord.length;
          }

      }
  }



  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  function findShort(s) {
      var arr = s.split(' ');
      var smallest = arr[0];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i].length < smallest.length) {
              smallest = arr[i];
          }
      }
      return smallest.length;
  }

  /////////////////////////////////////////////

  function findShort(s) {
      var arr = s.split(" "),
          short = arr[0];
      arr.forEach(function(word) {
          if (word.length <= short.length) {
              short = word;
          }
      })
      return short.length;
  }

















  //write a string and return the length of the shortest word
  //using reduce method

  function checkWord(str) {
      //Split the string into an array of strings
      var convertToArr = str.split(' ');

      var shortestWord = convertToArr.reduce(function(a, b) {

          return a.length <= b.length ? a : b;

      });
      return shortestWord.length;

  }




  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  //function takes an array and return the sum 
  //using reduce method


  function sumArray(elements) {
      var sum = elements.reduce(function(a, b) {
          return b + a;
      });
      return sum;
  }
  sumArray([2, 3, 2, 1])




  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //function accepts array of number as argument and returns the highest number


  function max(numArray) {
      //Split the string into an array of strings
      var maximum = numArray.reduce(function(a, b) {
          if (b > a)
              return b;
          else
              return a;
      });
      return maximum;
  }
  max([2, 4, 7, 5, 8])



  //!!!!!!!!!!!!!!!!!!!!

  //function printReverse accepts an array an print


  function isUniform(elements) {
      for (var i = elements.length - 1; i >= 0; i--) {
          console.log(elements[i]);

      }

  }
  isUniform(["risen", "is", "king", "the"])







  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  //Given an array of one's and zero's convert the equivalent binary value to an integer.

  //Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

  var binary = [];

  function equivalent(val) {
      //convert array to a string using join    
      var str = binary.join('');
      //convert string to integer use parseInt
      var integ = parseInt(str, 2);
      return integ;
  }



  ///
  function binaryArrayToNumber(binary) {
      //convert array to a string using join    
      var str = binary.join('');
      //convert string to integer use parseInt
      var num = parseInt(str, 2);
      return num;
  }
  binaryArrayToNumber()


  //!!!!!!!!!!!!!!!!!!!!!!!!




  ////sum up the value of two arguments and returns the sum in binary
  //function accepts two arguments
  function addBinary(a, b) {
      //sum up the value of both arguments
      var result = a + b;
      //returns the value of result converted to binary(that is in base of 2) in string format
      return (result >>> 0).toString(2);
  }










  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

  function validatePin(num) {
      var numStr = num + "";
      var numArr = numStr.split('');
      if (numArr.length === 4 || numArr.length === 6) {
          return true;
      } else {
          return false;


      }

  }






  //or
  function validatePIN(pin) {
      return /^(\d{4}|\d{6})$/.test(pin)
  }

  //or
  function validatePIN(pin) {
      // return true or false
      if (typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6)) {
          return true;
      } else {
          return false;
      }
  }









  //


  //Codewars Kata: Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

  //The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

  //Note that the principal is not taxed but only the year's accrued interest


  function calculateYears(principal, interest, tax, desired) {
      // your code
      var years = 0;
      while (principal < desired) {
          principal += (principal * interest) * (1 - tax);
          years++;
      }
      return years;
  }

  //or


  function calculateYears(principal, interest, tax, desired) {

      // create an endless loop that will increment the number of years
      for (var year = 0;; year++) {

          // check if the principal has reached the desired amount
          if (principal >= desired) {
              return year;
          }

          // calculate the interest for this year
          var currentYearInterest = interest * principal;

          // calculate the tax on the interest for this year
          var currentYearTax = currentYearInterest * tax;

          // adjust the principal to add the interest and minus the tax
          principal = principal + currentYearInterest - currentYearTax;

      }

  }




  //You are going to be given an array of integers. Your job is to take that array and find
  // an index N where the sum of the integers to the left of N is equal to the sum of the integers 
  //to the right of N. If there is no index that would make this happen, return -1.

  //

  function findEvenIndex(arr) {
      //code goes here!!
      var result = -1;
      for (var i = 1; i < arr.length; i++) {
          var leftSum = arr.slice(0, i).reduce(function(prev, next) {
              return prev + next;
          }, 0);
          var rightSum = arr.slice(i + 1).reduce(function(prev, next) {
              return prev + next;
          }, 0);
          if (rightSum === leftSum) {
              result = i;
              break;
          }
      }
      return result;
  }



  // OR

  function findEvenIndex(arr) {
      var rightSum = arr.reduce((acc, val) => acc + val, 0),
          leftSum = 0;
      for (var i = 0; i < arr.length; i++) {
          rightSum -= arr[i]; // rightSum = rightSum - arr[i]
          if (rightSum === leftSum)
              return i;
          leftSum += arr[i]; // leftSum = leftSum + arr[i]
      }
      return -1;
  }

  //OR

  function findEvenIndex(arr) {
      for (var i = 1; i < arr.length - 1; i++) {
          if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
              return i;
          }
      }
      return -1;
  }







  // Create Phone Number


  // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
  // Example:

  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

  // The returned format must be correct in order to complete this challenge.
  // Don't forget the space after the closing parenthese!


  function createPhoneNumber(numbers) {
      var first = numbers.slice(0, 3).join('');
      var middle = numbers.slice(3, 6).join('');
      var last = numbers.slice(6).join('');
      return "(" + first + ")" + " " + middle + "-" + last;
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


  //OR

  function createPhoneNumber(numbers) {
      var format = "(xxx) xxx-xxxx";
      for (var i = 0; i < numbers.length; i++) {
          format = format.replace('x', numbers[i]);
      }
      return format;
  }





  // The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

  // If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

  // If

  //     sz is <= 0 or if str is empty return ""
  //     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

  // Examples:
  // revrot("123456987654", 6) --> "234561876549"
  // revrot("123456987653", 6) --> "234561356789"
  // revrot("66443875", 4) --> "44668753"
  // revrot("66443875", 8) --> "64438756"
  // revrot("664438769", 8) --> "67834466"
  // revrot("123456779", 8) --> "23456771"
  // revrot("", 8) --> ""
  // revrot("123456779", 0) --> "" 
  // revrot("563000655734469485", 4) --> "0365065073456944"





  // ..........................................................................



  // Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

  // For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

  // As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

  // If a string contains all repeating characters, it should return the empty string ("").


  //accept a string
  //loop through string

  function firstNonRepeatedCharacter(string) {
      var first;

      string.split('').some(function(character, index, obj) {
          if (obj.indexOf(character) === obj.lastIndexOf(character)) {
              first = character;
              return true;
          }

          return false;
      });

      return first;
  }

  console.log(firstNonRepeatedCharacter('aabcbd'));


  // OR

  function firstNonRepeatedCharacter(string) {
      return string.split('').filter(function(character, index, obj) {
          return obj.indexOf(character) === obj.lastIndexOf(character);
      }).shift();
  }

  console.log(firstNonRepeatedCharacter('aabcbd'));

  // sort array for odd numbers and output the array in ascending order without displacing the even numbers indexes

  function sortArray(array) {
      // Return a sorted array.
      var sortedOddArray = array.filter(function(val) {
          if (val % 2 !== 0) {
              return val;
          }
      }).sort(function(a, b) {
          return a - b;
      });

      var i = 0;
      return array.map(function(val) {
          if (val % 2 === 0) {
              return val;
          }
          return sortedOddArray[i++];
      })
  }



  //OR 
  function sortArray(arr) {
      //sort odd array
      var filSort = arr.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

      return arr.map((n) => {
          return n % 2 === 0 ? n : filSort.shift();
      })
  }









  /* create a quiz app
  1. it must ask 5 questions
  2. keep track of how many questions the user answered correctly
  3. provide a message after the quiz letting the user know the # of questions they got right
  4. rank the player - if they answered all
    5 correct answers is a "gold crown"
    3-4 correct answers is a "silver crown"
    1-2 correct answers is a "bronze crown"
    0 correct answers is no crown */

  // START OF PROGRAM CODE

  alert("Welcome. The next few pop ups will ask a few questions. Good luck!");

  var score = 0; // keeps track of the correct answers entered by the player

  // question 1
  let answer1 = prompt("What year did the 13 colonies declare indepence from Great Britian?");
  if (parseInt(answer1) === 1776) {
      score = score + 1;
      alert("That is correct! You have answered " + score + " out 5 questions correctly so far!");
  } else {
      alert("Your answer is incorrect. You have answered " + score + " out of 5 questions correctly so far.");
  }


  // question 2
  var answer2 = prompt("What programing language is named after a gem?");
  if (answer2.toUpperCase() === 'RUBY') {
      score = score + 1;

      alert("That is correct! You have answered " + score + " out 5 questions correctly so far!");
  } else {

      alert("Your answer is incorrect. You have have answered " + score + " out of 5 questions correctly so far.");
  }


  // question 3
  var answer3 = prompt("What color is the sky?");
  if (answer3.toUpperCase() === 'BLUE') {
      score = score + 1;

      alert("That is correct! You have answered " + score + " out 5 questions correctly so far!");
  } else {

      alert("Your answer is incorrect. You have have answered " + score + " out of 5 questions correctly so far.");
  }


  // question 4
  var answer4 = prompt("2 + 2 = ?");
  if (parseInt(answer4) === 4) {
      score = score + 1;

      alert("That is correct! You have answered " + score + " out 5 questions correctly so far!");
  } else {

      alert("Your answer is incorrect. You have have answered " + score + " out of 5 questions correctly so far.");
  }


  // question 5
  var answer5 = prompt("How many US presidents have we had?");
  if (parseInt(answer5) === 45) {
      score = score + 1;

      alert("That is correct! You have answered " + score + " out 5 total questions.");
  } else {
      alert("Your answer is incorrect. You have have answered " + score + " out of 5 total questions.");
  }


  // crowns
  if (score === 5) {
      alert("You finished the quiz! You got " + score + " out of 5 questions correct! You receive the gold crown!");
  } else if (score >= 3 && score < 5) {
      alert("You finished the quiz! You got " + score + " out of 5 questions correct! You receive the silver crown!");
  } else if (score >= 1 && score < 3) {
      alert("You finished the quiz! You got " + score + " out of 5 questions correct! You receive the bronze crown!");
  } else {
      alert("You finished the quiz! You got " + score + " out of 5 questions correct! I'm sorry, you don't recieve a crown. :(");
  }


  // IT WORKS! I can't believe it. I don't know if it's the best way to code it but it works. i decided to code in longhand even though I know I could use 
  // the shorthand *score += 1;* simply because I still forget how to update variables lol.


  function checker(arr) {
      arr.reduce(function(a, b) {
          if (a === b) {
              return a;
          }

      })
  }



  function checker(arr) {
      for (i = 0; i < arr.length - 1; i++) {
          if (arr[i] != arr[i + 1]) {
              return false;
          } else {
              return i;
          }
      }



      function checker(arr) {
          var first = arr[0];
          return arr.every(function(n) {
              if (n === first) {}
              (true) ? first: NaN;
          });
      }


      function check(arr) {
          // var first = arr[0];
          //     return arr.every(function(n) {
          //         return n === first;
          //     })
          function checker() {
              (check() === true) ? first: NaN;
          }

      }







      // In the following 6 digit number:

      // 283910

      // 91 is the greatest sequence of 2 digits.

      // Complete the solution so that it returns the largest five digit number 
      // found within the number given.. The number will be passed in as a string of only digits. It should 
      // return a five digit integer. The number passed may be as large as 1000 digits. 



      // function solution(digits){

      // }



      // #Find the missing letter

      // Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

      // You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
      // The array will always contain letters in only one case.

      // Example:

      // ['a','b','c','d','f'] -> 'e'
      // ['O','Q','R','S'] -> 'P'