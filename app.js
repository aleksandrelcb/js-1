let userName = "aleksandre";
console.log(typeof userName);
const myHobby = "reading book";
console.log(typeof myHobby);
let Birth = 2001;
console.log(typeof Birth);
const currentYear = 2023;
console.log(typeof currentYear);

const myBio = `my name is ${userName} my hobby is ${myHobby} my age is ${
  currentYear - Birth
}`;
console.log(myBio);

const myYears = currentYear - Birth;

const myHistory =
  " my name is " + userName + "my hobby is " + myHobby + "my age is " + myYears;
console.log(myHistory);
