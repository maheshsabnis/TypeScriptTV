class MyCalss {
    // private x:number;
    // private y:number;
    // constructor(x:number, y:number){
    //     this.x = x;
    //     this.y = y;
    // }
    constructor(private x:number, private y:number){}
    add(): number {
        return this.x  + this.y;
    }
    mult(): number {
        return this.x  * this.y;
    }
    // rest parameters
    // p = Object.create(argements);
    // p[_i] = argements[_i]
    addNumber(...p:number[]): number {
        let sum:number = 0;
        if(p.length > 0) {
            p.forEach((n,i)=> {
                sum+=n; 
            });
        }
        return sum;
    }
}
let objO = new MyCalss(10,20);

console.log(`2 parameters ${objO.addNumber(2,3)}`);
console.log(`3 parameters ${objO.addNumber(2,3,4)}`);
console.log(`4 parameters ${objO.addNumber(2,3,4,5)}`);
console.log(`5 parameters ${objO.addNumber(2,3,4,5,6)}`);

console.log(`Add = ${objO.add()}`);
console.log(`Mult = ${objO.mult()}`);