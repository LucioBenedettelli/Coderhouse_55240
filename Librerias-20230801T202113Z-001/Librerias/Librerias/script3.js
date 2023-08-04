/* const DateTime = luxon.DateTime
const dt = DateTime.local(2022, 1, 25, 12, 10)

console.log(dt.c.year) */

/* const DateTime = luxon.DateTime

const dt = DateTime.fromObject(
    { day: 22, hour: 12, month: 2 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
 )

console.log( dt.toString() )
// 2022-02-22T12:00:00.000-03:00 */

/* const DateTime = luxon.DateTime
const dt = DateTime.local(2022, 1, 25, 12, 10)

console.log(dt.toString())
 */

/* const DateTime = luxon.DateTime
let unafECHA = DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
let otraFecha = DateTime.fromISO("2017-05-15T08:30:00") 

console.log(unafECHA.toString()) */

/* const DateTime = luxon.DateTime
const dt = DateTime.now();
dt.year    //=> 2022
dt.month   //=> 1
dt.day     //=> 25
dt.second  //=> 22
dt.weekday 

console.log(dt.year) */

//const DateTime = luxon.DateTime
/* const dt = DateTime.now();

let fechaConBarra= dt.toLocaleString()  // 25/1/2022
let fechaCompleta = dt.toLocaleString(DateTime.DATE_FULL)  // 25 de enero de 2022
let hora = dt.toLocaleString(DateTime.TIME_SIMPLE)  // 12:51
let en = dt.setLocale('en').toLocaleString(DateTime.DATE_FULL)  

console.log(fechaConBarra)
console.log(fechaCompleta)
console.log(hora)
console.log(en)
 */

/* const dt = DateTime.now();

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
// 25/1/2022 14:21

const suma = dt.plus({ hours: 5, minutes: 15 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 19:36

const resta = dt.minus({ month: 2, days: 10 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 15/11/2021 14:21 */


/* console.log(dt.toString())
console.log(dt.set({hour: 3}).hour)  */ //=> 3

/* const Duration = luxon.Duration

const dt = DateTime.now();
const dur = Duration.fromObject({ hours: 3, minutes: 15 });

console.log( dur.hours ) // 3
console.log( dur.minutes ) // 15
console.log( dur.seconds ) // 0

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
//  25/1/2022 14:35

const suma = dt.plus(dur)
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 17:50

const resta = dt.minus(dur)
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 11:20 */

/* const Interval = luxon.Interval

let now = DateTime.now()
now.toString()
const later = DateTime.local("2022", "1", "26")
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') ) // 0.3905736111111111
console.log( i.length('hours') ) // 9.373766666666667
console.log( i.length('minutes') ) // 562.426 */

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const now = DateTime.now();
const later = DateTime.local(2024, 1, 26, 12, 0, 0); // 26 de enero de 2022 a las 12:00:00 PM
const i = Interval.fromDateTimes(now, later);

console.log(i.length('days')); // 0.3905736111111111
console.log(i.length('hours')); // 9.373766666666667
console.log(i.length('minutes')); // 562.426

//En Later hay que poner una fecha a futuro para que se haga la diferencia con dateTime.now




