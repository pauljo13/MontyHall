// 만들어야 하는 것
// 1. 문을 클릭한다.
// 2. 해당 문을 제외한 문 중에 goat 가 있는 문이 열리고 goat가 나온다.
// 3. 선택지를 바꿀지 안 바꿀지 선택을 한다.
// 4. 결과 버튼 후 이미지를 보여 준다.
// 5. 성공 했는지 실패 했는지 기록을 보여 준다.
// 6. 확률을 표시한다.

// 함수
// 렌덤 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 0에서 i 사이의 무작위 인덱스를 선택합니다.
        const j = Math.floor(Math.random() * (i + 1));
        // 선택된 인덱스의 요소와 i번째 요소를 교환합니다.
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

function resetBorders(exceptDoor) {
  const doors = [door1, door2, door3];
  doors.forEach(door => {
    if (door !== exceptDoor) {
      door.parentNode.style.border = "";
    }
  });
}

let answer = [ 0, 1, 0]; // 1 = car | 0 = goat
answer = shuffleArray(answer);

let choice;

let door1 = document.querySelector("#door1");
door1.onclick = function(event) {
  resetBorders(door1);
  door1.parentNode.style.border =  "10px solid #fff200";
  choice = 0;
};

let door2 = document.querySelector("#door2");
door2.onclick = function(event) {
  resetBorders(door2);
  door2.parentNode.style.border =  "10px solid #fff200";
  choice = 1;
};

let door3 = document.querySelector("#door3");
door3.onclick = function(event) {
  resetBorders(door3);
  door3.parentNode.style.border =  "10px solid #fff200";
  choice = 2;
};

var decision = document.querySelector("#decision");
let anther = [0, 1, 2];
anther = shuffleArray(anther);
const doors = [door1, door2, door3];
var clickCount = 0;
var opened = false;

decision.addEventListener("click", function() {
  clickCount++;

  if (clickCount == 1) {
    anther = anther.filter(number => number !== choice); // 선택하지 않은 문 필터링
    decision.innerHTML = "최종 결정";

    // 염소가 있는 문을 열어 주기
    anther.forEach(element => {
      if (answer[element] !== 1 && !opened) {
        doors[element].parentNode.style.border = "white";
        doors[element].src = "/image/goat.png";
        opened = true; // 한 번만 실행
      }
    });
    anther = anther.filter(number => number !== element); // 이미 열린 문 제거
  } else if (clickCount == 2) {
    if (doors[choice].src.includes("goat.png")) {
      // alert("이미 염소를 선택했습니다!");
    } else {
      // 선택 결과에 따라 이미지 설정
      doors[anther[0]].src = "/image/goat.png";
      doors[choice].src = "/image/car.png";
      // if (choice == answer.indexOf(1)) {
      //   alert("성공");
      // } else {
      //   alert("실패");
      // }
    }
    clickCount = 0;
  }
});


document.querySelector("#reStart").addEventListener("click", function(){
  location.reload();
});