"use strict";

var n = 123;
n = 12.345;

alert( 1 / 0 );         // Infinity
alert( 'нечисло' * 2 ); // NaN, ошибка

var str = 'I love my mom';
    str  = 'It is ok';

var checked = true;  // поле формы помеченно галочкой
    checked = false; // попе формы не содержит галочки

var age = null;

var x;
alert( x ); // undefined

var y;
    y = undefined;

alert( x ); // undefined

// object
var user = { name: 'Vasia' };

// typeof x
// typeof(x)
typeof undefined    // undefined
typeof 0            // number
typeof true         // boolean
typeof "foo"        // string
typeof {}           // object
typeof null         // object
typeof function(){} // function

// Оператор typeof x позволяет выяснить,
// какой тип находится в x, возвращая его
// в виде строки.
