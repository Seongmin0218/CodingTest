function solution(my_string) {
    var answer = Array.from(my_string);
    var result = [];
    let j = answer.length;
    for(let i = 0; i <= answer.length; i++){
        j--;
        result[i] = answer[j]
    }
    return result.join('');
}