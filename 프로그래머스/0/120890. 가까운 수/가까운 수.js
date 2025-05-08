function solution(array, n) {
    return array.reduce((closest, current) => {
        const diffCurrent = Math.abs(current - n);
        const diffClosest = Math.abs(closest - n);

        if (diffCurrent < diffClosest) {
            return current;
        } else if (diffCurrent === diffClosest) {
            return Math.min(closest, current);
        } else {
            return closest;
        }
    });
}