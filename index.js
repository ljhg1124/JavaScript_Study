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

/*
const calculator =
{
    plus: function(a,b)
    {
        return a + b;
    }
};

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/*
const title = document.getElementById("title");

function handleClick(event){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);
*/
/*
if(10 === 5) // 참일 때 실행
{
    console.log("hi");
} 
else if("10" === "11")
{
    console.log("lalala");
}
else // 참 이외일 때 실행
{
    console.log("ho");
}
*/
/*
const age = prompt("How old are you");

if(age >= 18 && age <= 21)
{
    console.log('you can drink but you should not');
}
else if(age > 21)
{
    console.log('go ahed');
}
else
{
    console.log('too young')
}
*/

const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";

function handleClick()
{
    title.classList.toggle(CLICKED_CLASS);
}

function init()
{
    title.addEventListener("click", handleClick);
}

init();