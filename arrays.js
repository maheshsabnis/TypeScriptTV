var names = new Array();
names.push("James Bond");
names.push("Ethan Hunt");
names.push("Indiana Jones");
names.push("Jason Bourn");
for (var i = 0; i < names.length; i++) {
    console.log("Name at " + i + "then postion = " + names[i]);
}
console.log();
for (var i in names) {
    console.log("Name at " + i + "then postion = " + names[i]);
}
console.log();
// of --> moveNext() and Current
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(n);
}
