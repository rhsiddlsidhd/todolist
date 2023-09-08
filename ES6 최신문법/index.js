// let name = "noona";
// let age = 17;

// let person = { name, age };

// console.log(person);
// -------------------------
//

// let bts = {
//   name:"방탄소년단",
//   age:17
// }

// ----------------------------
// // let name = bts.name;
// // let num = bts.num;
// ----------------------------
// let {name,num} = bts

// console.log(name, num);

// ---------------------------------------

// let name = "noona";
// let age = 18;

// console.log(`제이름은 ${name} 입니다. 제 나이는 ${age} 입니다`);

// ------------------------------
// let array = [1, 2, 3]; //1예시

// let [a, b, c] = array;

// console.log(a, b, c);

// let array = [1, 2, 3]; //2예시

// let [a, ...rest] = array;

// console.log(rest);

// let person = {
//   //3객체 예시
//   name: "noona",
//   age: 19,
//   cute: true,
// };

// let { name, ...restinfo } = person;

// console.log(name, restinfo);
// ----------------------------------------------
// let a = [1, 2]; 1예시
// let b = [3, 4];
// let c = [5, 6];

// let result = a.concat(b, c);
// console.log(result);

// let a = [1, 2]; 2예시
// let b = [3, 4];
// let c = [5, 6];

// let result = [...a, ...b, ...c];
// console.log(result);

// ----------------------------------------

// es6 최신 함수선언식
//기존
// function (){
//   console.log(hello)
// }

//최신

// let foo = () => {
//   console.log("hello");
// };

// let age = 17;
// (this 제외해보기)(this 는 최신 문법으로 쓰기 어려워 구 문법으로 사용해야함)
// let person = {
//   name: "hete",
//   age: 20,
//   getinfo: function () {
//     console.log(this.age);
// },
// };
// person.getinfo();

// -------------------------------------------------
// 배열 최신 함수
let names = [
  "호랑이",
  "토끼",
  "사자",
  "고양이",
  "뱀",
  "표범",
  "치타",
  "하이에나",
  "기린",
  "하마",
  "당나귀",
  "살모사",
  "미어캣",
];
// 기존
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// 최신
// 예시1
// function printname(item) {
//   console.log(item);
// }

// names.forEach(printname);

// 예시2

// names.forEach(function (item) {
//   console.log(item);
// });

// 최신에 최신

// names.forEach((item, index) => {
//   console.log(item, index);
// });
//index도 추가 가능

// -----------------------------------
// let date = names.map((item) => {
//   return item;
// });
// console.log(date);

// forEach는 반환 값이 없음 / map 은 반드시 배열을 반환한다. (return 필수)

// filter 예시 1
// let ceolist = [
//   { name: "랄라", age: 23, ceo: true },
//   { name: "호호", age: 30, ceo: true },
//   { name: "하하", age: 40, ceo: true },
// ];

// let date = ceolist.filter((item) => {
//   return item.age == 23;
// });
// console.log(date);

// filter 예시 2

// let date = names.filter((item) => {
//   return item.startsWith("호");
// });
// console.log(date);

// some 예시 1 (filter이랑 비슷하나 boolean값으로 답함)

// let date = names.some((item) => {
//   return item.startsWith("호");
// });
// console.log(date);

// every 예시 1

// let date = names.every((item) => {
//   return item.length > 0;
// });
// console.log(date);

// find 예시 1 (필터는 해당 되는것 전부 찾아준다면, find는 정확한 값 하나만 찾고 끝)

// let date = names.find((item) => {
//   return item.startsWith("호");
// });
// console.log(date);

// findIndex 예시 1

let date = names.findIndex((item) => {
  return item == "하이에나";
});
console.log(date);
