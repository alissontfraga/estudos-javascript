// date objects = objects that contain values that represent dates and times
//These date objects can be changed and formatted

//Date(year, month, day, hour, minute, second, ms)
//const date = new Date(2024, 0, 1, 2, 3, 4, 5);
//const date = new Date("2024-01-02T12:00:00Z");

const date = new Date();
console.log(date);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDate();
console.log(day);

const hour = date.getHours();
console.log(hour);

const minutes = date.getMinutes();
console.log(minutes);

const seconds = date.getSeconds();
console.log(seconds);

const dayOfWeek = date.getDay();


const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
    console.log("Happy new year!");
}




