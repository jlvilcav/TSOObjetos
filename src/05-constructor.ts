export class MyDate {

  //tambien se puede inicializar con el constructor
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9) {

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

// const myDate = new MyDate(2022,6,25);
// console.log(myDate.printFormat());
// myDate.add(3, 'days');
// console.log(myDate.printFormat());
// console.log(myDate.printFormat());
// console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() =>',myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) =>',myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>',myDate4.printFormat());
