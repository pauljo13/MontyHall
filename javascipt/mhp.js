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
decision.onclick = function(event) {
  let anther = [0, 1, 2];
  anther = anther.filter(number => number !== choice);
  anther = shuffleArray(anther);
  for (let i = 0; i < 2; i++) {
    if (answer[anther[i]] !== 1) {
      alert(anther[i]);
      break;
    }
  }
};

var reStart = document.querySelector("#reStart");
reStart.onclick = function(event) {
  answer = shuffleArray(answer);
};