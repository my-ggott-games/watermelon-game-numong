/**
 * 이 프로젝트는 여러분이 기술 및 엔터테인먼트에 대해서만 학습할 수 있도록 도와줍니다.
 * 절대로 특허 침해를 피하기 위해 수정된 웹사이트를 대규모로 전파 및 상용화하지 마십시오!
 */

// 추가 점수: 숫자 수정
let extraScore = 1;

// 무적 모드: true를 false로 변경
let wuDi = true;

// 첫 번째 과일: 수정숫자는 0-10, 0은 포도, 9는 수박 반 개
let firstFruit = 0;

// 과일 합성 반전: false에서 true로 변경
let reverseLevelUp = false;

// 생성된 과일 지정: 기본값: 반전 0-5 켜지 않고 반전 6-11 켜고, 숫자 수정으로 무작위로 생성된 과일 범위 제어
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 생성된 임의과일 최소치（0-10） 0은 포도, 9는 수박 반 개
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 생성된 임의과일 최대치(1-11) 0은 포도, 9는 수박 반 개
let setFruits = {
  // 지정 전에 몇 번 생성된 과일은 임의의 수량을 채울 수 있습니다. 0은 포도, 9는 수박 반 개
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일 Q탄 더하기: false를 1보다 작은 임의의 소수로 바꿉니다 (0.9 추천)
let fruitQTan = false;

// 과일 낙하속도 감소：false를 0보다 많은 임의의 수로 변경한다. 값이 클수록 저항이 더디게 내린다(5 추천)
let fruitSlowDown = false;

// 과일 바꾸기: false - 불가능 true - 가능
let clickChangeFruit = true;

// 광고 링크: false 또는 빈 문자열은 광고로 넘어가지 않는다는 것을 나타냅니다.
let adLink = 'https://www.instagram.com/nu0900';

// 웹페이지 제목 수정: "누멍이 팬게임" 으로 변경합니다.
document.getElementsByTagName("title")[0].innerText = '누멍이 팬게임';

// 선택 팝업 열기: false를 true로 바꿉니다
let selectModal = false;

