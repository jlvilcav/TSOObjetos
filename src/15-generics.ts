
// function getValue(value: number | string){
//   return value;
// }

import { Dog } from "./09-protected";

// function getValue(value: unknown){
//   return value;
// }

function getValue<myType>(value: myType){
  const array: myType[] = [value];
  return value;
}

getValue<Number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,2,3]).forEach;
const fifi = new Dog('fifi', 'black');
getValue<Dog>(fifi).greeting();
