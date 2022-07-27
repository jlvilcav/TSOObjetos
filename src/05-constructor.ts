export class MyDate {
  //Las clases siempre piden inicializar las propiedades
  year: number = 0;
  month: number = 0;
  private day: number = 0;
  //tambien se puede inicializar con el constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

   printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days'|'months'|'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
    // return this;
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2022,6,25);
// console.log(myDate.printFormat());
myDate.add(3, 'days');
// console.log(myDate.printFormat());
console.log(myDate.printFormat());
console.log(myDate.getDay());
