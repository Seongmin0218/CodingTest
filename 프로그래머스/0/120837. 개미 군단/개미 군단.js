function solution(hp) {
    let answer = 0;
    answer = Math.floor(hp / 5);
    let nhp = hp % 5;
    answer = answer + Math.floor(nhp / 3);
    nhp = nhp % 3;
    answer = answer + nhp;
    return answer;
}