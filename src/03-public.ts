export class MyDate {
  //Las clases siempre piden inicializar las propiedades
  public year: number = 0;
  public month: number = 0;
  public day: number = 0;
  //tambien se puede inicializar con el constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days'|'months'|'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
    // return this;
  }


}

const myDate = new MyDate(2022,6,25);
// console.log(myDate.printFormat());
myDate.add(3, 'days');
// console.log(myDate.printFormat());
console.log(myDate.day);
myDate.day = 1;
console.log(myDate.day);
