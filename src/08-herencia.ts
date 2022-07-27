export class Animal {
  constructor(public name: string) { }

  move() {
    console.log('roaming the earth...');
  }

  greeting() {
    return `Hello, i'm ${this.name}`;
  }
}

export class Dog extends Animal {
  // owner: string;

  constructor(
    name:string,
    public owner: string
    ) {
      super(name);
  }
  woof(time: number): void {
    for (let i = 0; i < time; i++) {
      console.log('Woof!');
    }
  }
}


const salem = new Animal('Salem');
salem.move();
console.log(salem.greeting());

const cheis = new Dog('Cheis', 'Jorge');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
