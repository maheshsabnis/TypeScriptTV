// var in JS is function scocpe

function printValue(x:boolean){
    if(x) {
        let i = 10;
        console.log(`True i =  ${i}`);
    }
   // console.log(`False i =  ${i}`);
}

// printValue(true);
// printValue(false);

for(var i=0; i<5;i++) {
    console.log(`in loop ${i}`);
}
console.log(`Out of loop ${i}`);
i++;
console.log(`Out of loop after increament ${i}`);











