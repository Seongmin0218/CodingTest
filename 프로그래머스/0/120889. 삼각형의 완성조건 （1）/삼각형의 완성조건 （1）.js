function solution(sides) {
    let num = 0;
    let set = 0;
    for (let i = 0; i < 3; i++) {
        if (num < sides[i]) {
            num = sides[i];
        }
        set += sides[i];
    }
    
    let rest = set - num;

    if (rest > num) {
        return 1;
    }
    return 2;
}