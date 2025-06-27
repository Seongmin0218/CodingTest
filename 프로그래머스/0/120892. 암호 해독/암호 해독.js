function solution(cipher, code) {
    let cod = cipher.split('');
    let j = 0;
    let a = [];
    for (let i = 0; i <= cod.length; i++) {
        if (i % code == 0) {
            a[j] = cod[i + code - 1];
            j++;
        }
    }
    let answer = a.join('');
    return answer;
}