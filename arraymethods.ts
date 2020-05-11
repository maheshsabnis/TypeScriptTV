let roles: Array<string> = new Array<string>();
roles.push("James Bond");
roles.push("Ethan Hunt");
roles.push("Indiana Jones");
roles.push("Jason Bourn");

//roles.forEach(printData);

// roles.forEach(function(v:string, i: number){
//     console.log(v);
// });

// using arrow operators
roles.forEach((v:string,i:number)=> {
    console.log(v);
});
function printData(v:string, i: number){
    console.log(v);
}
console.log('sorting')
roles.sort().forEach((v:string,i:number)=> {
    console.log(v);
});
console.log()
console.log()

let filterdata = roles.filter((v,i)=>{
    return v.length > 12;
});

filterdata.forEach((v:string,i:number)=> {
    console.log(v);
});



