class Parent{ // بيشتغل حتى لو اول حرف small بس فيه مشاكل
    #owner;
    constructor(car, model, color,name){
        this.c = car;
        this.m = model;
        this.co = color;
        this.#owner = name;
    }
    getowner() {
    return `the owner is ${this.#owner}`;
    }
}

class Child extends Parent{
    constructor(car, model, color, name, engine_cc){
        super(car, model, color,name);
        this.cc = parseInt(engine_cc);
    }
}
let parent_one = new Parent('Limbo', 2016, 'yellow', 'Zydom');

console.log(parent_one.c);
console.log(parent_one.m);
console.log(parent_one.co);
console.log(parent_one.getowner());
console.log('#'.repeat(20));


let child_one = new Child('Limbo', 2016, 'yellow', 'Zydom', 1500);

console.log(child_one.c);
console.log(child_one.m);
console.log(child_one.co);
console.log(child_one.cc);
console.log(child_one.getowner());