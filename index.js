/*
alert('Im Working . Im JS. Im Beautiful. Im worth it'); // 경고창 띄우기.
console.log('Im Working . Im JS. Im Beautiful. Im worth it'); // 콘솔창으로 로그 띄우기.

let a = 221;
//const a = 221; // 숫자가 변경되기 싫을 경우 const 라는 변수를 사용한다.


let b = a - 5;

a = 4; // 이미 선언한 a 값을 변경할 수 있다.

console.log(b);
*/

/* String
//const what = Junhee <- 어딧는지 찾을수 없음.
const what = "Junhee";

console.log(what);
*/

/*
Boolean
const wat = true;
*/

/*
Number
const wat = 666;
*/

/*
 float 
const wat = 55.1;
*/

/*
const monday = "Mon"; 
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

const dataNum = 53;
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", dataNum];

console.log(daysOfWeek);
*/

/*
const Man = {
    name: "Jun",
    age: 30,
    gender:"Male",
    isHandosme: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: 
    [
        {
            name:"Kimchi", 
            fatty: false
        }, 
        {
            name:"Cheese burger", 
            fatty: true
        }
    ]
};
console.log(Man);
*/
/*
// 함수 생성.
function sayHello(potato, num)
{
    return `Hello ${potato} you are ${num} years old`;
}

const greetJun = sayHello("Jun", 20);

console.log(greetJun);
*/

const calculator =
{
    plus: function(a,b)
    {
        return a + b;
    }
}

console.log(calculator);

const plus = calculator.plus(5, 5);
console.log(plus);

/*
자바스크립트의 문법 규칙
 camel case 방법
 1. 소문자로 시작.
 2. 스페이스는 대문자로 시작.

 ex) daysOfWeek = days of week
*/