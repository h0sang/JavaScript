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

var 
