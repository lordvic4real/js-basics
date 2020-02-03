console.log("hello brytahub from main");

// variable declaration
var firstName = "victor";
console.log(firstName);
// data types in javascript
// number
// string
// Boolean
// Symbol
// undefined
// null
/*  double line comment  */

var lastName = console.log(lastName);
lastName = "david";
console.log(lastName);
var age = 24;
console.log(age);
var isStudent = false;
console.log(isStudent);

// naming variable variable name can only start with letter or an underscore or dollar sign
// variable name cannot contain special characters or spaces in between

var $years = 5;
console.log($years);

// variable mutation and coarsion it means variable change
// coarsion is how javascript forces a variable from one type to another
var name = "joe";
var firstName = "ugbede";
var myAge = 7;
console.log(firstName);

// coarsion
console.log("my name is " + name + "  i am " + myAge + "years old.");

var dob = 2019 - myAge;
console.log(dob);

// operators
var result = 3 - (4 / 2) * 2;

console.log(result);

var std1, std2, std3;
std1 = std2 = std3 = "james";
console.log(std1, std2, std3);

// increament
// var newAge = myAge +1;
myAge = myAge + 1;

myAge += 1;
myAge++;
console.log(myAge);

/**   class work
  var cynthiaMass = 100;
  var cynthiaHieght =40;


  var emekaMass = 44;
  var emekaHeight= 66;
  
  var cynthiaBmi = 100 / (40*40)
  var emakaBmi = 44 /(66*)


*/
//  correction

var cynthiaMass = 70;
var cynthiaHieght = 1.7;

var emekaMass = 175;
var emekaHeight = 1.6;

var cynthiaBmi = cynthiaMass / (cynthiaHieght * cynthiaHieght);
var emekaBmi = emekaMass / (emekaHeight * emekaHeight);

var higherBmi = cynthiaBmi > emekaBmi;
console.log(" is cynthia bmi higher than emeka's ? " + higherBmi);

// typeof helps us determine the type of a variable

console.log(typeof cynthiaBmi, typeof higherBmi);

// conditional statements

if (cynthiaBmi > emekaBmi) {
  console.log("cynthia wins");
} else {
  console.log("emeka wins");
}

var studentAge = 34;
if (studentAge >= 20) {
  console.log("you are a legal adult now");
} else if (studentAge < 18 && studentAge >= 13) {
  console.log("you are a teenager");
} else if (studentAge <= 13 && studentAge >= 5) {
  console.log("hello young one");
} else {
  console.log("lovely baby");
}

//  switch case  u can only test for equality

var gender = "male";
switch (gender) {
  case "male":
    console.log("hello sir");

    break;
  case "female":
    console.log("hello ma");
    break;
  default:
    console.log("you are confuse");
    break;
    2;
}

// tenary operators

var isMarried = true;
console.log("is james married " + (isMarried ? "yes" : "no"));

// class work

var johnScores = (89, 120, 103);
var johnAverageScores = (89 + 120 + 123) / 3;
console.log(johnAverageScores);

var mikeScores = (116, 94, 103);
var mikeAverageScores = (116 + 94 + 103) / 3;
console.log(mikeAverageScores);

var highestAverageSores = 110;

if (highestAverageSores >= 110) {
  console.log("johns team won");
} else if (highestAverageScores <= 103) {
  console.log(" try harder next time");
}

// correction

var johnAve = (89 + 120 + 103) / 3;
var mikeAve = (116 + 94 + 123) / 3;

var maryAve = (97 + 134 + 106) / 3;

if (johnAve > mikeAve && johnAve > maryAve) {
  console.log("the winner is johns team an average score of " + johnAve);
} else if (mikeAve > johnAve && mikeAve > maryAve) {
  console.log(" the winner is mike team with an average score of " + mikeAve);
} else if (maryAve > johnAve && maryAve > mikeAve) {
  console.log("the winner is marys team with an average score of " + maryAve);
} else {
  console.log("it is a draw");
}

// function

function calculateAge(yearOfBirth) {
  var currentYear = 2019;
  var age = currentYear - yearOfBirth;
  return age;
}
console.log("i am " + calculateAge(2000) + "years old");

function yearsUntilRetirement(dob, jobYear, name) {
  var myAge = calculateAge(dob);
  var noOfYears = calculateAge(jobYear);
  var ageTillRetirement = 65 - myAge;
  var workTillRetirement = 35 - noOfYears;
  if (ageTillRetirement > workTillRetirement) {
    console.log(
      " hello ," +
        name +
        " you have " +
        workTillRetirement +
        " years before you retire "
    );
  } else if (workTillRetirement > ageTillRetirement) {
    console.log(
      "hello," +
        name +
        " you have " +
        workTillRetirement +
        " years before you retire "
    );
  } else {
    console.log(
      " hello, " +
        name +
        " you have " +
        workTillRetirement +
        " years before you retire "
    );
  }
  //   console.log("james");
}
yearsUntilRetirement(1998, 2005, "james");
yearsUntilRetirement(1998, 2005, "joy");
yearsUntilRetirement(1998, 2005, "mary");
yearsUntilRetirement(1998, 2005, "rita");

// array

var result = [90, 87, 66, 77, 88, 99];
console.log(result);
console.log(result.length);
console.log(result[5]);
var student = [" hosea", "john", "favour", "emma"];
console.log(student);
console.log(student[3]);

console.log(student.indexOf("hosea"));
student.pop();
console.log(student);
student.shift();
console.log(student);
student.push("linda");
console.log(student);
student.unshift("ali");
console.log(student);

// fuction  practice
let fuel = 99;
function launch_rocket() {
  function warning_msg() {
    console.error("not enough fuel");
  }
  if (fuel >= 100) {
    console.log("we are good to go");
  } else {
    warning_msg();
  }
}
launch_rocket();

// correction
function tipCalculator(bill) {
  var percentage;
  if (bill < 5000) {
    percentage = 0.2;
  } else if (bill >= 5000 && bill < 20000) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bill = [12400, 4800, 26800];
var tips = [
  tipCalculator(bill[0]),
  tipCalculator(bill[1]),
  tipCalculator(bill[2])
];
var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[0]];
console.log(tips, finalValues);

// to track amount of time between function calls
// console.time();
// let arr = new Array(10000);
// for (i = 0; i < arr.length; i++) {
//   arr[i] = new Object();
// }
// console.timeEnd();

// object are like property or entity, key value pair

var student = {
  firstName: "victor",
  lastName: "david",
  age: 22,
  state: "new york",
  lga: "memphis",
  ca: 44,
  exam: 66
};
console.log(student);

console.log(student.state);
console.log(student["firstName"]);

var key = "ca";
console.log(student["ca"]);

var worker = Object.create(null);
worker.job = "doctor";
worker.salary = 30000;
console.log(worker);

// object with function
var house = {
  address: "gwags",
  monthlyRent: 1000,
  annual: 0,
  calculatAnnualRent: function() {
    // var annual = this.monthlyRent * 12;
    // return annual;
    this.annual = this.monthlyRent * 12;
    return this.annual;
  }
};
console.log(house.calculatAnnualRent);
console.log(house.calculatAnnualRent());
console.log(house);
// excercise
// function Bmi() {
//   (mark = {
//     fullName: "mark joel",
//     mass: 100,
//     hieght: 1.99
//   }),
//     (jane = {
//       fullName: "mark joel",
//       mass: 100,
//       hieght: 1.99
//     });
//   let bmi = mass / (hieght * hieght);

//   markBmi = mass / (hieght * hieght);
//   janeBmi = mass / (hieght * hieght);

//   if (markBmi > janeBmi) {
//     console.log("mark won");
//   } else if (janeBmi > markBmi) {
//     console.log("jane won");
//   } else {
//     console.log("its a draw");
//   }
// }
// Bmi();

var mark = {
  fullName: " mark emeka",
  mass: 56,
  hieght: 1.6,
  calculateBmi: function() {
    this.bmi = this.mass / (this.hieght * this.hieght);
    return this.bmi;
  }
};
// console.log(mark.calculateBmi());

var daniel = {
  fullName: "daniel emeka",
  mass: 56,
  hieght: 1.7,
  calculateBmi: function() {
    this.bmi = this.mass / (this.hieght * this.hieght);
    return this.bmi;
  }
};
// var markMass = prompt("what is mark mass kg?");
// var markHieght = prompt("what is mark hieght in meter ?");

// var danielMass = prompt("what is daniel  mass in kg?");
// var danielHieght = prompt("what is daniel hieght in meter ?");

// mark.mass = parseFloat(markMass);
// mark.hieght = parseFloat(markHieght);

// daniel.mass = parseFloat(markMass);
// daniel.hieght = parseFloat(markHieght);

if (mark.calculateBmi() > daniel.calculateBmi()) {
  console.log("mark has the highest bmi");
  console.log("full name", mark.fullName);
  console.log("bmi", mark.bmi);
} else if (daniel.calculateBmi() > mark.calculateBmi()) {
  console.log("daniel has the highest bmi");
  console.log("full name ", daniel.fullName);
  console.log("bmi", daniel.bmi);
} else {
  console.log("its a stalemate");
}

// loops and iteration it is use to repeat  a set of task   forLoop
// this is a forloop
for (var index = 0; index <= 20; index++) {
  console.log("hello " + index);
}
var students = ["john", "james", "fred", "dan", "success"];

for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
  if (students[i] === "james") {
    break;
  }
}

// whileloop

var counter = 0;
while (counter < students.length) {
  console.log("hello " + students[counter]);
  counter++;
}

students.map(function(students) {
  console.log(students);
});

var developers = [
  {
    name: "victor",
    language: "javascript"
  },
  {
    name: "bidemi",
    language: "javascript"
  },
  {
    name: "lifted",
    language: "javascript"
  },
  {
    name: "frank",
    language: "javascript"
  }
];
developers.map(function(developer) {
  console.log(developer.name + " codes in " + developer.language);
});

// assignment

function calTip(bill) {
  //   var bill = [
  //    {bill: 5000},
  //    {bill: 15000},
  // {bill: 25000},
  // {bill: 55000},

  //   ]
  var percentage;
  if (bill < 5000) {
    percentage = 0.2;
  } else if (bill >= 5000 && bill <= 20000) {
    percentage = 0.15;
  } else if (bill > 20000) {
    percentage = 0.1;
  }
  return percentage * bill;
}

console.log(calTip(300));

var johnBills = [
  {
    bill1: 12400
  },
  {
    bill2: 4800
  },
  {
    bill3: 26800
  },
  {
    bill3: 18000
  },
  {
    bill4: 4200
  }
];
console.log(johnBills);

// correction

var john = {
  fullName: "john Ali ",
  bills: [12400, 4800, 26800, 18000, 4200],
  calTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 5000) {
        percentage = 0.2;
      } else if (bill >= 5000 && bill <= 20000) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill + percentage;
    }
  }
};
var obi = {
  fullName: "Obi Peter ",
  bills: [7700, 47500, 11000, 4000, 4500],
  calTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 10000) {
        percentage = 0.2;
      } else if (bill >= 10000 && bill < 30000) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill + percentage;
    }
  }
};
function calculateAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
john.calTips();
obi.calTips();
john.average = calculateAverage(john.tips);
obi.average = calculateAverage(obi.tips);
console.log(john, obi);

if (john.average > obi.average) {
  console.log(
    john.fullName +
      " 's family pays higher tips, with an average of $ " +
      john.average
  );
} else if (obi.average > john.average) {
  console.log(
    obi.fullName +
      " 's family pays higher tips, with an average of $ " +
      obi.average
  );
}
