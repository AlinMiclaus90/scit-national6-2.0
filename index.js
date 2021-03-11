console.log("Course 16 - ECMA Script");

console.log(a);
var a = 6;
a = 7;
console.log(a);

// console.log(b);
let b ;
console.log(b);
b = 7;
console.log(b);


let c = "a sentence";
console.log(c);
if (true) {
  let c = "a word";
  console.log(c);
}

console.log(c);

var x = "a sentence"
console.log(x);
if (true) {
  var x = "a word";
  console.log(x);
}

console.log(x);

var y = 1;
function increment(){
  var y = 2;
  y++
  console.log(y);
  }

  increment();
  console.log(y);

  // function variation

  function nameFunction (a,b) {
    //instructions
    return;
  };

  // anonymous functions <=> expression functions

  let anonymous = function() {
    console.log("This is a anonymous");
  }

  anonymous();

// ES6 arrow functions (is an anonymous function)
// no parameters!!!
const noParams = () => {
  console.log("This is arrow, no parameters!");
  return;
}
noParams();

//with parameters
const withParameters = (a,b) => {
  return a < b;
}
const resultWithParameters = withParameters(3,4);
console.log(resultWithParameters);

// no curly braces
const noCurly = () => 1 + 1;
const resultCurly = noCurly();
console.log(resultCurly);

// no parentheses - when you have a single parameter
const noParentheses = a => a + 1;
const resultNoParentheses = noParentheses(5);
console.log(resultNoParentheses); 

const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false : true )
console.log(arrayEven);

// old style - ES 5

const arrayEvenES5 = array.filter(function(element) {
  return element % 2 ? false : true;
});
console.log(arrayEvenES5);

const arrayOdd = array.filter(element => element % 2)
console.log(arrayOdd);


function ourFilter(originalArray, filterFunction) {
  const filteredArray = [];
  for (const element of originalArray) {
      if (filterFunction(element)) {
          console.log('element passed condition', element);
          filteredArray.push(element);
      }
  }

  return filteredArray;
}

function isUneven(element) {
  console.log(element % 2);
  return element % 2;
}

const resultOurUnevenArray = ourFilter(array, isUneven);
console.log(resultOurUnevenArray);