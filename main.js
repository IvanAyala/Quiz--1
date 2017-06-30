console.log("#1");
console.log("Starting JavaScript...");

console.log("#2");
var name = 'Ivan Ayala';
console.log(name);

console.log("#3");
var myAge = 28;
var averageAge = 30;
var ageDiff = averageAge - myAge;
console.log(myAge);
console.log(averageAge);
console.log(ageDiff);
if (myAge == averageAge) {
    console.log("I'm as old as the average.");
} else if (myAge < averageAge) {
    console.log("I'm younger than the average.");
} else {
    console.log("I'm older than the average.");
}

console.log("#4");
var membersNames = ["Alex", "Dini", "Harry", "Dani", "Mark", "Christoph", "Jewe"];

var text = "";
var i;
console.log(membersNames);
membersNames.sort();
console.log(membersNames[0]);
console.log(membersNames.slice(-1)[0]);
for (i = 0; i < membersNames.length; i++) {
    text += membersNames[i] + '\n';
};
console.log(text);


var membersAges = [26, 28, 27, 32, 29, 33, 32];



var textAge;
var text = "";
var i;
for (i = 0; i < membersNames.length; i++) {
    text += membersNames[i] + '\n';
};

for (i = 0; i < membersAges.length; i++) {
    textAge += membersAges[i] + '\n';
};



var exampleArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
exampleArray.sort();





// console.log(name + '\n'+ myAge + '\n'+ ageDiff 
// + '\n'+ membersNames +'\n'+ membersNames[0] + '\n'+ membersNames.slice(-1)[0]
// + '\n'+text+'\n'+textAge +'\n' + exampleArray[0] +'\n' + exampleArrayLast);
