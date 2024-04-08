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
    }

document.addEventListener('DOMContentLoaded',function() {
  let answer = [ 0, 1, 0]; // 1 = car | 0 = goat
  answer = shuffleArray(answer);

  let doors = document.querySelectorAll(".door");
  doors.forEach((door, index) => {
    door.setAttribute("data-answer", answer[index]);
  });

  let door1 = document.querySelector('#door1');
  console.log(door1.getAttribute('data-answer')); // '0'
});

let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let door3 = document.querySelector("#door3");

document.addEventListener('DOMContentLoaded', () => {
  door1.onclick = function() {
      alert(door1.getAttribute("data-answer"));
  };

  door2.onclick = function() {
      alert(door2.getAttribute("data-answer"));
  };
  
  door3.onclick = function() {
      alert(door3.getAttribute("data-answer"));
  };
});

var reStart = document.querySelector("#reStart");
reStart.onclick = function(event) {
  answer = shuffleArray(answer);
}