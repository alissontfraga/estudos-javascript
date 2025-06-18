// ES6 Module = An external file that contains reusable code that can be imported into other Javascript files.
// Write reusable code for many different apps.
// Can contain variables, classes, functions and more
// Introduced as part of ECMAScript 2015 update

import {PI, getCircumference} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

