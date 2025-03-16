function solution(my_string) {
    var array = my_string.replace(/[^0-9]/g, '').split('');
    array = array.map(Number).sort((a, b) => a - b);
    return array;
}