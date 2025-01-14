function solution(n, k) {
    let nw = n*12000;
    let kw = k*2000;
    let s = 0;
    if(n >= 10) {
        s = Math.floor(n / 10) * 2000;
    }
    return (nw + kw - s);
}