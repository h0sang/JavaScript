"use strict";

alert(2 > 1);  // true
alert(2 == 1); // false
alert(2 != 1); // true

////////////////////////////////////////////////////

var a = true;

var b = 3 > 4;
alert( b );      // false

alert( a == b ); // (true == false) -> false

////////////////////////////////////////////////////

alert( 'B' > 'A' ); //true...

alert( 'a' > 'Z' ); // true, строчные буквы больше прописных

// Если первая буква первой строки больше – значит первая строка больше,
// независимо от остальных символов:

alert( 'Banana' > 'Anna');

// Если одинаковы – сравнение идёт дальше. Здесь оно дойдёт до третьей буквы:

alert( 'Anna' > 'Anma'); // true

// При этом любая буква больше отсутствия буквы:

alert( 'Hello' > 'Hell'); // true


alert( '2' > '14');   // true?

alert( +'2' > +'14'); // false

////////////////////////////////////////////////////

alert( '2' > 1 ); // true (2 > 1)
alert( 2 > '1' ); // true

alert( '01' == 1 ); // true (1 == 1)
alert( 4 == '04' ); // true (4 == 4)

alert( false == 0 ); // true (false = 0)
alert( true == 1);   // true (true = 1)

////////////////////////////////////////////////////

alert( 0 == false );  // true
alert( '' == false ); // true WTF?!?!

// Для проверки равенства без преобразования типов используются операторы
// строгого равенства === (тройное равно) и !==.
// Если тип разный, то они всегда возвращают false:

alert( 0 === false ); // false

////////////////////////////////////////////////////

// Интуитивно кажется, что null/undefined эквивалентны нулю, но это не так.
// Они ведут себя по-другому.
    // Значения null и undefined равны == друг другу и не равны чему бы то
    // ни было ещё. Это жёсткое правило буквально прописано в спецификации языка.
    // При преобразовании в число null становится 0, а undefined становится NaN.

alert( null > 0 );  // false
alert( null == 0 ); // false

alert( null >= 0 );  // true
alert( null === 0 ); // false

////////////////////////////////////////////////////

// Значение undefined вообще нельзя сравнивать:

alert( undefined > 0 );  // false (1)
alert( undefined < 0 );  // false (2)
alert( undefined == 0 ); // false (3)

alert( undefined == null ); // true

////////////////////////////////////////////////////
