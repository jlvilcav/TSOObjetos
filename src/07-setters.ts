export class MyDate {

  //tambien se puede inicializar con el constructor
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9) { //a las variables privadas se le cambia el formato por "_" adelante

  }

   printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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
  get month() {
    return this._month;
  }
  //Setters
  set month(newValue: number) {
    this._month = newValue;
    if(newValue >=1 && newValue <=12) {
      this._day = newValue;
    } else {
      throw new Error('Invalid month');
    }
  }


}
const myDate = new MyDate(2022,6,25);
console.log(myDate.printFormat());
myDate.month = 78;
console.log('No debe aparecer ',myDate.month);
