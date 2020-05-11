let names: Array<string> = new Array<string>();
names.push("James Bond");
names.push("Ethan Hunt");
names.push("Indiana Jones");
names.push("Jason Bourn");

for(let i=0; i< names.length; i++) {
    console.log(`Name at ${i}then postion = ${names[i]}`);
}
console.log();
for(let i in names) {
    console.log(`Name at ${i}then postion = ${names[i]}`);
}
console.log();
// of --> moveNext() and Current
for(let n of names) {
    console.log(n);
}