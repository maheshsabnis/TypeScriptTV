// var in JS is function scocpe
function printValue(x) {
    if (x) {
        var i_1 = 10;
        console.log("True i =  " + i_1);
    }
    // console.log(`False i =  ${i}`);
}
// printValue(true);
// printValue(false);
for (var i = 0; i < 5; i++) {
    console.log("in loop " + i);
}
console.log("Out of loop " + i);
i++;
console.log("Out of loop after increament " + i);
