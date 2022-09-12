1.Count Characters

const countCharacters = (S) => 
{
    let countOfA = 0;
    let countOfD = 0;
    for (let character of S) {
        if (character === "A") {
            countOfA++;
        } else if (character === "D") {
            countOfD++;
        }
    }
    let B = [countOfA, countOfD];
    return B;
};

2. Count the Heads

var Count_Occ = (s) => 
{
      let newString = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let letter of letters) {
    for (let character of s) {
      if (letter === character) {
        count++;
      }
    }
    if (count > 1) {
      newString += `${letter}${count}`;
    }
    count = 0;
  }
  return newString;
};

3.Count the Vowels

var Count_Vowels = (S) => {
    let vowels = "aeiou";
    let count = 0;
    for (letter of vowels) {
      for (character of S) {
        if (letter === character) {
          count++;
        }
      }
    }
    return count;
  };

  4.Concatenate the Strings

  var Concatenate_Strings = (S1, S2) => 
{
      return (S1+S2)
};

5.Find Length


const findLength = (S) => 
{
    return (S.length)
};

6.Find the Winner

var Game_Winner = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let letter of S) {
      if (letter === "A") {
        countOfA++;
      } else {
        countOfD++;
      }
    }
  
    if (countOfA > countOfD) {
      return "Aditya";
    } else if (countOfA < countOfD) {
      return "Danish";
    } else {
      return "Draw";
    }
  };

  7.Join Strings

  return S.concat(P);

  8.Plaindrome Check

  var Palin_Check = (str) => {
    let reversedString = "";
    for (let i = str.length-1; i >= 0; i--) {
      reversedString += str[i];
    }
  
    if (str === reversedString) {
      return "True";
    } else {
      return "False";
    }
  };
  
  9.Reverse the String

  var Reverse_String = (str) => {
    let reverseString = "";
    let length = str.length;
  
    while (length > 0) {
      reverseString += str[length - 1];
      length--;
    }
  
    return reverseString;
  };

  10.Match the Strings

  var String_Match = (S1, S2) => {
    return S1 === S2 ? "YES" : "NO";
  };
  
  String_Match("Prepbytes", "Prepbytes");

  11.String Replace

  var Replace = (S, pattern, text) => {
    return S.replace(pattern, text);
  };
  
  Replace("Hi, I am You.", "You", "Prepbytes");

  12.Split the String

  
var Split_the_string = (S) => 
{
  let arr = S.split(" ");
  
  return arr

};


  13.Count the Vowels and Consonants

  var Count_Vowels = (S) => {
    S = S.toLowerCase();
    let vowels = "aeiou";
    let count = 0;
    for (let letter of S) {
      for (let vowel of vowels) {
        if (vowel === letter) {
          count++;
        }
      }
    }
    return count;
  };
  
  var Count_Consonants = (S) => {
    S = S.toLowerCase();
    let vowels = "aeiou";
    let count = 0;
    for (let letter of S) {
      if (
        letter !== "a" &&
        letter !== "e" &&
        letter !== "i" &&
        letter !== "o" &&
        letter !== "u"
      ) {
        count++;
      }
    }
    return count;
  };