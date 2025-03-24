function solution(s) {
    let s1 = s.split(" "); //문자열을 배열로 분리
    let result = s1.filter(item => typeof item === 'number'); //배열에서 숫자만 추출
    let answer = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "Z") {
            result.pop();
        } else {
            result.push(Number(s1[i]));
        }
    }
    answer = result.reduce((acc, cur) => acc + cur, 0);
    return answer;
}