console.log('Math.PI',Math.PI);
console.log('Math.max',Math.max(1, 2, 3, 11, 4, 5));

class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    // console.log(numbers);
    return numbers.reduce((max, curr) => max >= curr ? max : curr, Number.MIN_SAFE_INTEGER);

  }
}

// const myMath = new MyMath();
// console.log(myMath.PI);

console.log('MyMath.PI',MyMath.PI);
console.log('MyMath.max',MyMath.max(1, 2, 3, 11, 4, 5,9));
const numbers = [1,2,3,4,55,6,7,8];
console.log('MyMath.max',MyMath.max(...numbers));
console.log('MyMath.max',MyMath.max(-1, -2, -3, -11, -4, -5, -9));


