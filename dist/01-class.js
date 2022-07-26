"use strict";
const dat = new Date();
dat.getDay();
dat.getMonth();
const date = new Date(1988, 3, 29); // 0-> Enero, 1-> Febrero, 2-> Marzo, 3-> April, 4-> Mayo, 5-> Junio, 6-> Julio, 7-> Agosto, 8-> Septiembre, 9-> Octubre, 10-> Noviembre, 11-> Diciembre
date.getDay();
date.getMonth();
date.toISOString();
console.log(dat);
console.log(date);
class MyDate {
    //tambien se puede inicializar con el constructor
    constructor(year, month, day) {
        //Las clases siempre piden inicializar las propiedades
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
const myDate = new MyDate(2022, 6, 25);
console.log(myDate);
