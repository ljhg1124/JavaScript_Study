# JavaScript_Study
바닐라 자바스크립트 공부!

===================================================================
작성 최초 날짜 : 2020. 02. 07
업데이트 날짜 : 2020. 02. 20

===================================================================


 .HTML
===================================================================

    JavaScript가 별루인 이유
 1. title 이건 head 이건 태그를 열었으면 닫기 태그도 다 해줘야한다.!
 
===================================================================


.CSS
===================================================================
 
 ex) 
 <body> </body>
 <h1 id="title">This works!</h1>
 위의 HTML 글자 색을 바꾸거나 변경할때.

body{
    background-color : peru;
}

h1 {
    color: rgb(141, 132, 132);
}

#title{ ... }
===================================================================




 .JS
===================================================================

      alert('Hi!');            // 경고창 띄우기.
      console.log('Hellow!');  // 콘솔창으로 로그 띄우기.

   1.  Variable (변수)
    - 변하는 수

    첫째 - 변수 선언 
    둘째 - 초기화
    셋째 - 사용하면된다!

    변수 종류
     1. let   - 값이 변경 가능한 변수
     2. const - 값이 변경 불가능한 변수 (상수) 
     3. var - varible - 이또한 값 변경이 가능한 변수

    const
     - constant ( 상수 라는 뜻.)
     - 변하지 않는 숫자.
     - 이후 변경할 수 없다 (에러 발생함)

     var
      - varible
      - 2~3년 전엔 let, const는 없었고 오직 var 변수만 존재 했었다.

   2. 주석
    ■ // ... (내용)  - 싱글 주석

    ■ /*       
      ...(내용)  
      */   
      - /* */ 안에 있는 모든 내용 주석 처리
      - 멀티라인 주석

   3. Boolean
    - true - 1
    - false - 0

   4. Float
    - 소수점.
    - 1.0
    - 3.14

    5. Array
     - 배열의 인덱스는 0부터 시작하므로 arr[3] 출력시 arr의 0, 1, 2 의 2의 내용이 출력이 됨.
     - 초기화 방법 
       ex) const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
     - 자바스크립트의 배열은 어떤자료형이든 입력이 가능.
     - 선언된 변수또한 입력가능.
       ex) const num = 54;
           const nums = [53, num, 55, 56];   

    6. Object
     - 오브젝트는 각 value에 이름을 넣어줄 수 있다. 
     - Array와 다른점은.. Array는[](브라켓)로 선언해 만들지만 Object는 {}(컬리 브라켓)로 선언 한다.

       ex)
        const Man = {
          name: "Jun",
          age: 30,
          gender:"Male",
          isHandosme: true,
          favMovies: ["Along the gods", "LOTR", "Oldboy"],
          favFood: [
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

      - 특이점.. 위 예시의 Man은 const로 선언한 것으로 값을 임의로 변경할 수 없지만 오브젝트 안의 객체(name, age 등등..)은 변경이 가능하다.
      - 줄 바꿀때 콤마(,) 빼먹지 말기 중요!
      - 오브젝트안에 Array, Array 안에 오브젝트 입력 가능.

      - 오브젝트 안에 함수를 넣을 수 있다.
      ex)
      const calculator =
      {
        plus: function(a,b)
        {
          return a + b;
        }
      }

      const plus = calculator.plus(5, 5);
      console.log(plus);


    7. Function 
     - 함수는 함수이다.
     - 어떤 것의 기능, 기능적 인것들

      ex)
      // 함수 생성.
      function sayHello(potato, num)
      {
        console.log("Hello!", potato, num);
      }
      sayHello("Jun", 15);  

      ...yHello(Argument(인자));
      인자는 변수 같은 것.

    8. ` ` (백틱)
      ex)
      function sayHello(potato, num)
      {
        return `Hello ${potato} you are ${num} years old`;
      }
      - 예시와 같이 한문장안에 변수 값을 넣을 수 있다.
      
    9. DOM (Document Object Module)    
     - 자바스크림트는 html에 있는 모든 요소를 가지고 올 수 있다.
     - HTML를 객체형태로 가져올수가 있다.
     ex) 
      const title = document.getElementById("title");
      itle.innerHTML = "Hi! From JS";
      title.style.color = "red";
      document.title = 'I own you now';

      - 이런식으로 html을 연결하여 직접 수정이 가능 하다.

    10. Event처리
        ex)
        const title = document.getElementById("title");

        function handleClick(event){
          title.style.color = "blue";
        }
        title.addEventListener("click", handleClick);

        - 타이틀을 클릭하게 되면 글자색이 바뀌는 이벤트.

    11. if - else
      
        - 조건을 만들수 있다.
        - === 는 두 피연산자가 자료형, 내용 모두 일치해야한다.
        - == 는 두 피연산자를 비교전 동일한 자료형으로 변환후 내용을 검사
        ex)
        (1 == 1);    true
        ('1' == 1);  true
        (1 === 1);   true
        ('1' === 1); false

    12. 이벤트 정보 사이트

        - 이벤트의 근원을 알고 싶을때 - MDN을 찾아봐라
        - 검색 방법 : javascript dom event mdn



이외..

자바스크립트의 문법 규칙
 camel case 방법
 1. 소문자로 시작.
 2. 스페이스는 대문자로 시작.

 ex) daysOfWeek = days of week

자바스크립트는 이벤트를 받기를 기다린다.

색 정보 사이트 : https://flatuicolors.com/

window.addEventListener("offline", 함수); // 인터넷 연결안됨
window.addEventListener("online", 함수);  // 인터넷 연결됨
즉 인터넷 연결 상태가 확인이 됨.!



===================================================================


Make your first JS App 

// 함수 설명
setInterval(함수, 시간간격)
 - 일정 시간 간격으로 함수를 실행 시켜줌.

 3항 연산자
 



