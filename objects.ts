let obj = {x:10};
console.log(`obj.x = ${obj.x}`);
let obj1 = obj; // assigning the obj1 by obj
console.log(`obj.x = ${obj.x} && obj1.x = ${obj1.x}`);
obj1.x = 100; // updating obj1.x
console.log(`After update obj1.x =100, obj.x = ${obj.x} && obj1.x = ${obj1.x}`);

//======================================================================
let obj2 = Object.assign({}, obj); // clone of obj in the blank object

console.log(`obj.x = ${obj.x} &&& obj2.x = ${obj2.x}`);
obj2.x  =10000;
console.log(`After update obj2.x,  obj.x = ${obj.x} &&& obj2.x = ${obj2.x}`);

