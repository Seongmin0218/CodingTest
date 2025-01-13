function solution(my_string, letter) {
    letter = new RegExp(letter, 'g');
    let answer = my_string.replace(letter, '');
    return answer;
}