// For Loop

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// While Loop

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}


// forEach Loop

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});


// for...in Loop

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// Day Names for Next DAYS

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();

for (let i = 0; i < DAYS; i++) {
    const dayIndex = (today + i + 1) % 7;
    console.log(days[dayIndex]);
}
