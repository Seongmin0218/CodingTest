function solution(age) {
    let answer = [];
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let sstr = str.split("");
    let ageStr = age.toString();
    age = ageStr.split("");
    for(let i = 0; i < str.length; i++){
        answer[i] = sstr[age[i]]
    }
    return answer.join('');
}