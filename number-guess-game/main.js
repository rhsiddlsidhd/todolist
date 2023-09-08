// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// if 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 :down
// 랜덤번호가 >유저번호 :up
// reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다

let computerNum = 0;
let playbutton = document.getElementById("playbutton");
let user_input = document.getElementById("user_input");
let resultarea = document.getElementById("result_area");
let resetbutton = document.getElementById("reset_button");
let chances = 5;
let gameover = false;
let chancearea = document.getElementById("chance_area");
let history = [];

playbutton.addEventListener("click", play);
//addeventListener(이벤트 이름, 이벤트발행시 실행함수)
resetbutton.addEventListener("click", reset);
user_input.addEventListener("focus", function () {
  user_input.value = "";
});

function pickrandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; //math.random()랜덤하게 숫자가 나오도록 해주는 함수  math.random 기본 설정은 0~1(1포함x)사이의 숫자 랜덤지정
  // math.floor() 소수점 이하 싹 날려주는거
  console.log("정답", computerNum);
}

function play() {
  let uservalue = user_input.value;

  if (uservalue < 1 || uservalue > 100) {
    resultarea.textContent = "1과 100사이 숫자를 입력해 주세요";
    retrun;
  }

  if (history.includes(uservalue)) {
    resultarea.textContent =
      "이미 입력한 숫자 입니다. 다른 숫자를 입력해 주세요";
    retrun;
  }
  //유효성검사

  chances--;
  chancearea.textContent = `남은기회:${chances}번`; //백틱 동적인 + 정적인 합쳐서 문장쓸때 쓰는 문법으로 기억해두기 자주쓰임
  console.log("chance", chances);
  if (uservalue < computerNum) {
    resultarea.textContent = "up!!";
  } else if (uservalue > computerNum) {
    resultarea.textContent = "down!!";
  } else {
    resultarea.textContent = "정답입니다!!";
    gameover = true;
  }
  history.push(uservalue);
  console.log(history);

  if (chances < 1) {
    gameover = true;
  }

  if (gameover == true) {
    playbutton.disabled = true;
  }
}

function reset() {
  // user input 창이 깨끗하게 정리되고
  user_input.value = "";
  //  새로운 번호가 생성되고
  pickrandomNum();
  resultarea.textContent = "결과값이 여기 나옵니다.";
}

pickrandomNum();
