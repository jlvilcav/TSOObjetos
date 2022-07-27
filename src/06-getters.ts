export class MyDate {

  //tambien se puede inicializar con el constructor
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9) { //a las variables privadas se le cambia el formato por "_" adelante

  }

   printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
    // return this;
  }

  get day() {
    return this._day;
  }

  get isLeapYear():boolean {
    return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
    // return true;
  }
  //Todos los getters retornan valores
}

const myDate = new MyDate(2022,6,25);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day); //Asi se accede al metodo getter de la clase
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000,6,25);
console.log('(2000) =>',myDate2.isLeapYear);

const myDate3 = new MyDate(2001,6,25);
console.log('(2001) =>',myDate3.isLeapYear);

const myDate4 = new MyDate(2004,6,25);
console.log('(2004) =>',myDate4.isLeapYear);
