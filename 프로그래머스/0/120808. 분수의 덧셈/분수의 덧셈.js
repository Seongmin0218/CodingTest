function solution(numer1, denom1, numer2, denom2) {
    let dnum = denom1*denom2;
    let num1 = numer1*denom2;
    let num2 = numer2*denom1;
    let numer = num1 + num2;
    var answer = [];
    const gcd = (a, b) => {
        while(b !== 0) {
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    };
    const result = gcd(numer, dnum);
    numer /= result;
    dnum /= result;
    return [numer, dnum];
}