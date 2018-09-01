"use strict";

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) {
  alert('right');
}

var hour = 12,
  isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert('Офис до 10 или после 18 или в выходной закрыт');
}

var x;
true || (x = 1);
alert(x); // undefined

var x;

false || (x = 1);
alert(x); // 1

alert( 1 || 0 );              // 1
alert( true || 'something' ); // true

alert( null || 1 );      // 1
alert( undefined || 0 ); // 0

var undef;
var zero = 0;
var emptyStr = '';
var msg = 'hello';

var result = undef || zero || emptyStr || msg || 0;

alert( result );

alert( undefined || '' || false || 0 ); // 0

////////////////////////////////////////////////////

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

var hour = 12,
  minute = 30;

  if (hour == 12 && minute == 30) {
    alert('Time is 12:30');
  }

if (1 && 0) {
  alert('does not work');
}

// Первый аргумент - true,
// Поэтому возвращается второй аргумент
alert(1 && 0); // 0
alert(1 && 5); // 5

// Первый аргумент - false,
// Он и возвращается, а второй аргумент игнорируется
alert( null && 5 );             // null
alert( 0 && 'does not matter'); // 0

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3

// Приоритет у && больше, чем у ||
alert( 5 || 1 && 0 ); // 5
// Поэтому в следующем коде сначала будет вычислено правое И: 1 && 0 = 0, а уже потом – ИЛИ.



var  age = prompt('Number, please', '');
if (age >= 14 && age <= 90) {
  alert('nice');
} else {
  alert('wrong');
}


var age = prompt('Nmber, please', '');

  if (!(age >= 14 && age <= 90))
  if (age < 14 || age > 90);
