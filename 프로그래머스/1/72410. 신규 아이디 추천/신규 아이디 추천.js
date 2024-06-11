function solution(new_id) {
    // 1단계: 소문자로 변환
    new_id = new_id.toLowerCase();
    console.log(new_id);
    
    // 2단계: 소문자, 숫자, -, _, .만 남기고 제거
    const regex2 = /[^a-z0-9-_.]+/g;
    let str1 = new_id.replace(regex2, '');
    console.log(str1);
    
    // 3단계: 연속된 마침표(.)를 하나의 마침표(.)로 변환
    str1 = str1.replace(/\.{2,}/g, '.');
    console.log(str1);
    
    // 4단계: 문자열의 처음과 끝에 있는 마침표(.) 제거
    str1 = str1.replace(/^\.|\.$/g, '');
    console.log(str1);
    
    // 5단계: 빈 문자열이면 "a"를 대입
    if (str1.length === 0) {
        str1 = 'a';
    }
    console.log(str1);
    
    // 6단계: 길이가 16자 이상이면 처음 15자를 제외한 나머지 제거, 끝에 마침표가 있다면 제거
    if (str1.length >= 16) {
        str1 = str1.slice(0, 15);
        str1 = str1.replace(/\.$/g, '');
    }
    console.log(str1);
    
    // 7단계: 길이가 2자 이하라면, 길이가 3이 될 때까지 마지막 문자를 반복해서 끝에 붙임
    while (str1.length <= 2) {
        str1 += str1.charAt(str1.length - 1);
    }
    console.log(str1);
    
    return str1;
}