var roles = new Array();
roles.push("James Bond");
roles.push("Ethan Hunt");
roles.push("Indiana Jones");
roles.push("Jason Bourn");
//roles.forEach(printData);
// roles.forEach(function(v:string, i: number){
//     console.log(v);
// });
// using arrow operators
roles.forEach(function (v, i) {
    console.log(v);
});
function printData(v, i) {
    console.log(v);
}
console.log('sorting');
roles.sort().forEach(function (v, i) {
    console.log(v);
});
console.log();
console.log();
var filterdata = roles.filter(function (v, i) {
    return v.length > 12;
});
filterdata.forEach(function (v, i) {
    console.log(v);
});
