// 채팅방에 들어오면 ㅇㅇ님이 들어왔습니다.
// 나가면 ㅇㅇ님이 나갔습니다.
// 닉네임을 변경하는 방법은 두 가지 1. 나간 후 변경 된 닉네임으로 들어오기  2. 채팅방에서 변경
// 변경하면 이전에 출력된 모든 messi지가 변한다
// 중복 닉네임 허용
// 유저 아이디로 구분한다
// 입장 Enter [유저 아이디][닉네임]
// 퇴장 Leave [유저 아이디][닉네임]
// 닉네임 변경 Change [유저 아이디][닉네임]
// 첫 단어는 무조건 Enter Leave Change
// 각 단어는 공백 포함 알파벳 대/소문자 숫자
// 유저 아이디 & 닉네임은 알파벳 대/소문자로 구별
// 유저 아이디와 닉네임의 길이는 1이상 10이하
// 채팅방을 나간 후 닉네임 변경하는 건 X

function solution(record) {
  let key = [];
  let answer = [];
  let idNick = {};
  for (let i = 0; i < record.length; i++) {
    answer.push(record[i].split(" "));
  }
  answer.forEach((element) => {
    if (element[2] === undefined){
    }
    else{
    idNick[element[1]] = element[2];
    }
  });
  for (let i = 0; i < record.length; i++) {
    if (record[i].includes("Enter")) {
      key.push(idNick[answer[i][1]] +"님이 들어왔습니다.");
    }
    else if (record[i].includes("Leave")) {
      key.push(idNick[answer[i][1]] +"님이 나갔습니다.");
    }
  } return key;
}
solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Enter uid6545 aadds",
  "Change uid6545 asd",
  "Leave uid6545",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
// enter > 님이 입장했습니다.
// Leave > 님이 나갔습니다.
// change / 변경되면 그 전 기록도 다 변경
//
