//var num = 20 + 10000;
// 한 줄 주석은 슬래시 2개로 표시

/*
  여러 줄 주석을 달자
  자바스크립트 주석과 자바의 주석은 같습니다.
*/

//let x = 10;
//let y = 5;

// AND 연산자 true
//if (x > 5 && y < 10) {
//  console.log("x는 5보다 크고, y는 10보다 작습니다.");
//}
//
//if (x === 10 || y === 10) {
//  console.log("x 또는 y 중 하나가 10입니다.");
//}
//
//let isTrue = true;
//console.log(!isTrue)


//let result = (x > y) ? "x가 더 큽니다." : "y가 더 크거나 같습니다.";

//let num = 10;
//let strNum = "10";
//
//if (String(num) == strNum) {
//	console.log('equals')
//}
//
//let age = 20;
//
//if (age >= 18) {
//	console.log("Adult");
//} else {
//	console.log("Minor");
//}

//let temperature = 20;
//
//if (temperature >= 30) {
//	console.log("정말 더운 날씨 입니다");
//} else if (temperature >= 25) {
//	console.log("더운 날씨 입니다.");
//} else if (temperature >= 15){
//	console.log("서늘한 날씨 입니다");
//} else if (temperature >= 0){
//	console.log("시원한 날씨 입니다");
//} else {
//	console.log("정말 추운 날씨입니다");
//}


// 3의 배수만 출력하기
//let num = 0;
//
//while (num <= 60) {
//    if (num % 3 == 0){
//	    console.log(num);
//	}
//	num += 1
//}


// 윤년 계산기
// 2000년부터 2030년까지의 윤년을 구하기
// 연도가 4로 나누어 떨어지고 100으로 나누어 떨어지지않으면 윤년이다
// 단, 연도가 400으로 나누어 떨어지면 윤년이다

// 윤년의 조건:
// - 4의 배수이면서 100의 배수가 아닌 해
// - 또는 400의 배수인 해
/*
let year = 2000;

while (year <= 2030){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        console.log(`${year}년 - 윤년입니다`);
    }
    year += 1;
} */

let year = 2000;

while (year <= 2030){
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(`${year}년 - 윤년입니다`);
    } else if (year % 400 == 0) {
	      console.log(`${year}년 - 윤년입니다.`);
    }
    year += 1;
}

