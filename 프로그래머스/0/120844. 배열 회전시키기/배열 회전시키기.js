function solution(numbers, direction) {
    var answer = numbers;
    if (direction === "left") {
        answer.push(answer.shift());
    } else if (direction === "right") {
        answer.unshift(answer.pop());
    }
    return answer;
}