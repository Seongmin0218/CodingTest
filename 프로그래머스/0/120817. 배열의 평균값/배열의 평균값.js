function solution(numbers) {
    var answer = 0;
    let i;
    for(i = 0; i < numbers.length; i++) {
        answer+=numbers[i];
    }
    answer = answer/i;
    return answer;
}