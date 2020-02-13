# JavaScript_Study
바닐라 자바스크립트 공부!

===================================================================
작성 최초 날짜 : 2020. 02. 07
업데이트 날짜 : 2020. 02. 09

===================================================================

 .HTML

alert('Hi!');            // 경고창 띄우기.
console.log('Hellow!');  // 콘솔창으로 로그 띄우기.

===================================================================

    JavaScript가 별루인 이유
 1. title 이건 head 이건 태그를 열었으면 닫기 태그도 다 해줘야한다.!
 
===================================================================

 .JS
===================================================================

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
      
    


용어정리

자바스크립트의 문법 규칙
 camel case 방법
 1. 소문자로 시작.
 2. 스페이스는 대문자로 시작.

 ex) daysOfWeek = days of week

===================================================================