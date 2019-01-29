var hacker1 = 'Arthur';

console.log(`The driver's name is ${hacker1}`);

var hacker2 = 'Stefano';

console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length}' characters`);
}
 else if (hacker2.length > hacker1.length) {
   console.log(`Navigator got the longest name, it has ${hacker2.length} characters`);
 }
else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters`);
}

var newString ='';
for (var i = 0; i < hacker1.length; i++) {
  newString += hacker1[i];
  newString += ' ';
}
console.log(newString.toUpperCase());

var reverseString = '';
for (var i = hacker2.length - 1; i >= 0; i--) {
  reverseString += hacker2[i];
}
console.log(reverseString);

var nameComparison = function(driver, navigator) {
driver = driver.toLowerCase();
navigator = navigator.toLowerCase();

if (driver === navigator) {
 return console.log('What? You both got the same name?');
}

var longerName = driver;
var shorterName = navigator; 
if (driver.length < navigator.length) {
  shorterName = driver;
  longerName = navigator;
}

let i = 0;

while (i < shorterName.length){
  if (driver[i] == navigator[i]) {
    i++;
    if (!shorterName[i]) {
   return console.log(`This name is shorter and therefore it goes first(c)Martin -- ${shorterName}`);
  }
  }
  else if (driver[i] < navigator[i]) {
    return console.log(`Driver\'s name goes first ${driver}`);
  }
  else if (driver[i] > navigator[i]) {
    return console.log(`Navigator\'s name goes first ${navigator}`);
  }
}
};

nameComparison('Arte', 'Artemon'); 