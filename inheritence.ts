class BaseClass{
    constructor(private n:number){}
    // protected is accessible in derive class using 'this'
    protected display():void {
        console.log(`n = ${this.n}`);
    }
}

class DeriveClass extends BaseClass {
    constructor(private v: number){
        super(v); // call to base class ctor
    }
    caller(): void {
       this.display();
    }
}

let d = new DeriveClass(100);
d.caller();