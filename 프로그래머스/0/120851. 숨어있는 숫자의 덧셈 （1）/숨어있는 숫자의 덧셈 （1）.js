function solution(my_string) {
    let num = my_string.replace(/[^0-9]/g, "");
    let arr = num.split("").map(Number);
    let result = arr.reduce((acc, cur) => acc + cur, 0);
    return result;
}