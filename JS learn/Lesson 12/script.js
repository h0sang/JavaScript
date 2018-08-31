"use strict";

var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
  if ( year != 2011 ) {
    alert("It's wrong!!!");
    alert("I'm not kidding!");
  }
  else {
    alert("You're right! Nice");
  }

var age = prompt('Age?', '');

var message = (age < 3) ? 'Hi, baby ;)' :
              (age < 18) ? 'Hi' :
              (age < 100) ? 'Hello' : 'Wow, easy man!';

alert(message);

var admin = prompt('Who is the best man in the world?', '');

var answer = (admin == 'Ihor') ? alert('Yes, he is') : alert("No, he isn't");

////////////////////////////////////////////////////

// Exercise 1

var company = prompt('Каково «официальное» название JavaScript?', '');
  if ( company == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? «ECMAScript»!');
  }

// Exercise 2

var number = prompt('Enter your number', '');
  if ( number > 0 ) {
    alert(1);
  } else if ( number < 0 ) {
    alert(-1);
  } else if ( number == 0 ) {
    alert(0);
  } else {
    alert('ERROR..');
  }


// Exercise 3

var pass, login = prompt('Кто пришел?', '');
  if (login == 'Админ') {
    pass = prompt('Пароль?', '');
      if (pass == 'Черный Властелин') {
        alert('Добро пожаловать!');
      } else if (pass == null) {
        alert('Вход отменен');
      } else {
        alert('Пароль неверен');
      }
  } else if (login == null) {
    alert('Вход отменен');
  } else {
    alert('Я вас не знаю');
  }

// Exercise 4

var message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
