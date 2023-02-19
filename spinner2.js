/*
---- Spinner I ----
M1/Wk4/Spinner I: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/388?journey_step=32

---- INSTRUCTIONS ---- 

---- NOTES ----
We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.

*/

// // testing \r
// process.stdout.write('hello from spinner1.js... \rheyyy\n');




// setTimeout(() => {
//     process.stdout.write('\r|  ');
// }, 1000);


// setTimeout(() => {
//     process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//     process.stdout.write('\r—  ');
// }, 500);

// setTimeout(() => {
//     // need to escape the backslack since it's a special character.
//     process.stdout.write('\r\\  ');
// }, 700);

//Refactoring: 

let symbols = ['|', ' /', '—', '\\','|', ' /', '—', '\\', '|'];
let setTime = 1000;

for(const item of symbols) {
setTimeout(() => {
    process.stdout.write(`\r${item}   `);   
}, setTime);
setTime += 300;
};