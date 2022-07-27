export class Animal {
  constructor(protected name: string) { }

  move() {
    console.log('roaming the earth...');
  }

  greeting() {
    return `Hello, i'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Do Something');
  }
}

export class Dog extends Animal {

  constructor(
    name:string,
    public owner: string
    ) {
      super(name);
  }
  woof(time: number): void {
    for (let i = 0; i < time; i++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Moving as a dog.');
    super.move();
  }
}

const cheis = new Dog('Cheis', 'Jorge');
// cheis.name = 'Cheisito';
cheis.woof(1);
cheis.move();

