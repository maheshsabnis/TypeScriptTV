// implicit declaration (default to 'any')
let n1 = 100;
// explict declaration
let n2: number;
n2 = 388; 

let fname: string = "Mahesh";
let mname: string = "Rameshrao";
let lname: string = "Sabnis";

let fullname = fname + " " + mname + " \n "
                     + lname;
console.log(fullname);
// temaplet string, the HTML interpolation for string parse
let fullnameTemplate = `${fname} ${mname} 
            ${lname}`;
console.log(fullnameTemplate);