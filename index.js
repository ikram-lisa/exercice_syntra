// EERST BASIS SYNTAX OEFENINGEN
// A. Maak een functie dat geen parameters ontvangt
// en je naam logt

function name() {
  return "ikram";
}

// B. Maak een functie dat 3 namen ontvangt
// log de 2e naam dat dus met de functieaanroep wordt doorgegeven
function namen(naam1, naam2, naam3) {
  return naam2;
}
console.log(namen("ikram", "amara", "tamara"));
// C. Maak een functie dat 3 getallen ontvangt
// vermenigvuldig het 2e getal met 4 en print het uit
function getallen(taal1, taal2, taal3) {
  return taal2 * 4;
}
console.log(getallen(4, 390, 180));
// D. Maak een functie dat een naam en een leeftijd ontvangt
// Print dan de zin uit : "Hallo David, je bent 41 jaar oud!"

function info(naam, leeftijd) {
  return `Hello  ${naam}, je bent ${leeftijd} jaar oud !`;
}
console.log(info("ikram", "27"));
// E. maak een functie dat voornaam en achternaam ontvangt
// en de volledige naam gescheiden met een komma teruggeeft
// voorbeeld: geefVolledigeNaam("David","Verhulst")

function fullName(voorNaam, achterNaam) {
  return voorNaam + " , " + achterNaam;
}
console.log(fullName("ikram", "lamsaddeq"));

// F. maak een functie dat 5 getallen ontvangt.
// ze allen optelt en teruggeeft
// voorbeeld: sumIt(1,5,6,9,2)

function sumIt(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumIt([1, 4, 0, 9, 3]));

// G. maak een functie dat zetInHoofdletters noemt.

// stuur 3 namen naar die functie.
// Zet die 3 namen in hoofdletters en plaats ze in een array

function zetInHoofdletters(a) {
  return a.map((wrd) => {
    const capitalized = wrd.toUpperCase();
    return capitalized;
  });
}
const wrds = ["ikr", "kami", "kabi"];
console.log(zetInHoofdletters(wrds));
// de functie geeft een array terug met de 3 namen in hoofdletters
// voorbeeld: geefArrayMetUpperNames("Bert","Els","Cindy")
function geefArrayMetUpperNames(arr) {
  return arr.map((word) => {
    const capitalizedFirst = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return capitalizedFirst + rest;
  });
}
const words = ["ikram", "naram", "aman"];
console.log(geefArrayMetUpperNames(words));
// H. maak een functie dat een naam en en getal ontvangt.
// print die naam dan zo vaak uit dan het meegegeven getal
// voorbeeld: printKeerUit("David", 6)

function printKeerUit(naam, nr) {
  for (i = 0; i < nr; i++) {
    console.log(naam);
  }
}
console.log(printKeerUit("ikram", 6));

// I. Maak een functie printLijn. Geef mee met welk karakter je de lijn wenst
// te printen en als tweede parameter hoe lang die lijn moet zijn.
// voorbeeld: printLijn("-",25);
function printKeerUit(carac, nr) {
  let caracs = carac.repeat(nr);
  return caracs;
}
console.log(printKeerUit("-", 26));

// VANAF HIER START THE REAL DEAL !!!
// 1. Write a JavaScript function to check if a certain word is a Palindrome.
function Palindrome(word) {
  let re = /[\W_]/g;
  word = word.toLowerCase().replace(re, "");
  let len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
    {
      return true;
    }
  }
}
console.log(Palindrome("never odd or even"));

// 2. Write a JavaScript function to get a random item from an array.

function random(item) {
  return item[Math.floor(Math.random() * item.length)];
}
let item = [254, 45, 212, 365, 2543];
console.log(random(item));

// 3. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swap(str) {
  let newLetters = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      newLetters += str[i].toLowerCase();
    } else {
      newLetters += str[i].toUpperCase();
    }
  }

  return newLetters;
}
console.log(swap("The Quick Brown Fox"));
// 4.Write a JavaScript function to compute the sum of an array of integers.
function compute(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str[i];
  }
  return sum;
}
console.log(compute([1, 2, 3, 4, 5, 666, 77, 28, 19, 66]));

// 5. Write a JavaScript function to remove a specific element from an array
// var myNames = ["John","Cindy","Omer","Barbie","Barbie"];
// removeSpecificelement(myNames,"Barbie");

var arr = ["John", "Cindy", "Omer", "Barbie", "Barbie"];
function dup(data) {
  return data.filter((value, index) => data.indexOf(value) !== index);
}
console.log(dup(arr));
// 6. Write a function to remove all strings with less than X characters
// from an array of strings
function remove(v, index, arr) {
  if (v === 3) {
    arr.splice(index, 4);
    return true;
  }
  return false;
}
const myArray = [5, 10, 2, 3, 15];

const delet = myArray.filter(remove);
console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${delet}`);

function removeChar(arr, lengte) {
  return arr.filter(function (word) {
    return word.length > lengte;
  });
}
console.log(removeChar(["adaam", "Candy", "Johaan", "Megan", "An", "Jo"], 4));

// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.
let fib = [0, 1];
function listFibonacci(n) {
  for (let i = 1; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  console.log(fib);
}
listFibonacci(6);
listFibonacci(18);
listFibonacci(9);
listFibonacci(10);
// 8. Write a JavaScript function that returns array elements larger than a number
// given:
//  var numbers = [5,2,20,60,45];
//  var toCheck = 6;
// returned array:
//  [20,60,45]

function largeElement(arr, les) {
  let largestNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > les) {
      largestNum.push(arr[i]);
    }
  }
  return largestNum;
}
console.log(largeElement([5, 2, 20, 60, 45], 6));

// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);
function randomRGB() {
  var roundValue = Math.round,
    rndmValue = Math.random,
    maxNum = 255;
  return (
    "rgba(" +
    roundValue(rndmValue() * maxNum) +
    "," +
    roundValue(rndmValue() * maxNum) +
    "," +
    roundValue(rndmValue() * maxNum) +
    ")"
  );
}

console.log(randomRGB());
// 10. Write a JavaScript program to find the types of a given angle.  Go to the editor
//   Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
function angle_Type(angle) {
  if (angle < 90) {
    return "Acute angle: An angle between 0 and 90 degrees.";
  }
  if (angle === 90) {
    return "Right angle: An 90 degree angle.";
  }
  if (angle < 180) {
    return "Obtuse angle: An angle between 90 and 180 degrees.";
  }
  return "Straight angle: A 180 degree angle.";
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
// 11. Write a JavaScript function to merge two arrays and removes all duplicates elements.
// FROM HERE NO FOR LOOPS ALLOWED
function arrMerge(arr1, arr2) {
  //   let arr = arr1.concat(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1;
}
const arr1 = [1, 2, 3];

const arr2 = [2, 30, 1];
console.log(arrMerge(arr1, arr2));

// 12. given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])

// 13. given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//     nthPower([2,1,6,4],16)
// 14. given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)
function Averge(arr) {
  let avg = arr.reduce((acc, v) => acc + v / arr.length, 0);
  return avg;
}

console.log(Averge([2, 1, 6, 4]));
// 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
//   remove all the names that do not start with a capital

function Capital(array) {
  const all = array.filter((e) => !/^[a-z]+$/g.test(e));
  return all;
}
console.log(Capital(["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"]));

function firstIsUppercase(str) {
  const firstLetter = str[0];
  if (
    firstLetter.toUpperCase() === firstLetter &&
    firstLetter !== firstLetter.toLowerCase()
  ) {
    return true;
  }

  return false;
}
console.log(firstIsUppercase("Hello"));
console.log(firstIsUppercase("100 percent"));

function capitalizeWords(arr) {
  let cap = arr.filter((e) => {
    if (e.charAt(0) == e.charAt(0).toUpperCase()) {
      return true;
    } else {
      return false;
    }
  });
  return cap;
}

console.log(
  capitalizeWords(["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"])
);
// 16. Write a Javascript function to find how many times a certain number occurs in that array.

function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}
console.log(getOccurrence([2, 3, 1, 3, 4, 5, 3, 1], 3));
// 17. Write a JavaScript program to find the most frequent item of an array. (modifié)

// 18. Write a JavaScript function to chop a string into chunks of a given length.
function string_chop(str, length) {
  str = String(str);
  length = Math.floor(length);
  if (length > 0) {
    return str.match(RegExp(".{1," + length + "}", "g"));
  }
  {
    return [str];
  }
}
console.log(string_chop("w3resource"));
console.log(string_chop(["w3resource"], 2));
console.log(string_chop(["w3resource"], 3));
