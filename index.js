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
console.log(Palindrome("A man, a plan, a canal. Panama"));

// 2. Write a JavaScript function to get a random item from an array.
// 3. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 4.Write a JavaScript function to compute the sum of an array of integers.
// 5. Write a JavaScript function to remove a specific element from an array
// var myNames = ["John","Cindy","Omer","Barbie","Barbie"];
// removeSpecificelement(myNames,"Barbie");
// 6. Write a function to remove all strings with less than X characters
// from an array of strings
// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.
// 8. Write a JavaScript function that returns array elements larger than a number
// given:
//  var numbers = [5,2,20,60,45];
//  var toCheck = 6;
// returned array:
//  [20,60,45]
// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);
// 10. Write a JavaScript program to find the types of a given angle.  Go to the editor
//   Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
// 11. Write a JavaScript function to merge two arrays and removes all duplicates elements.
// FROM HERE NO FOR LOOPS ALLOWED
// 12. given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])
// 13. given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//     nthPower([2,1,6,4],16)
// 14. given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)
// 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
//   remove all the names that do not start with a capital
// 16. Write a Javascript function to find how many times a certain number occurs in that array.
// 17. Write a JavaScript program to find the most frequent item of an array. (modifié)
