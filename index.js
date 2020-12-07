"use strict"
// alert("Я JavaScript!");

// let name;
// let admin;
// name = "Джон";
// admin = name;
// alert(admin);



// let nameEart = "Земля";
// let currentUserName = "Катя";



// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya



// let userName = prompt(" Как тебя зовут?");
// alert(userName);



// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1



// let a = 2;
// let x = 1 + (a *= 2); // 5


// "" + 1 + 0 // 10
// "" - 1 + 0  //-1
// true + false  // 1
// 6 / "3"  // 2
// "2" * "3"  // 6
// 4 + 5 + "px"  //9px
// "$" + 4 + 5  // $45
// "4" - 2  // 2
// "4px" - 2  // NaN
// 7 / 0  // infinity
// "  -9  " + 5  // -9 5
// "  -9  " - 5  // -14
// null + 1  // 1
// undefined + 1  // NaN
// " \t \n" - 2  // -2



// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert( Number(a)+ Number (b)); 



5 > 4 // true
"ананас" > "яблоко"  // false
"2" > "12"  // true
undefined == null  // true
undefined === null  // false
null == "\n0\n"  // false
null === +"\n0\n"  // false



if ("0") {
    alert( 'Привет' );
  } // да


let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
    }



let value = prompt('Число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}



let result = (a + b < 4) ? 'Мало' : 'Много';



let message = 
(login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';



alert( null || 2 || undefined );  //2


alert( alert(1) || 2 || alert(3) );  //


alert( 1 && null && 2 );  //


alert( alert(1) && alert(2) );  //



