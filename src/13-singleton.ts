export class MyService {
  static instance:MyService | null = null;
  private constructor(private name:string) { }
  getName() {
    return this.name;
  }

  static create(name:string) {
    if (MyService.instance === null) {
      console.log('Creating new instance, just once');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('MyService 1');
console.log(myService1.getName());

const myService2 = MyService.create('MyService 2');
console.log(myService2.getName());

const myService3 = MyService.create('MyService 3');
console.log(myService3.getName());

console.log(myService1 === myService2);
