function solution(n) {
    let count = 0;

    function isComposite(num) {
        let divisorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) divisorCount++;
            if (divisorCount > 2) return true;
        }
        return false;
    }

    for (let i = 1; i <= n; i++) {
        if (isComposite(i)) count++;
    }

    return count;
}