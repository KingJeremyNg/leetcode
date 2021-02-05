function sumEvenAfterQueries(A: number[], queries: number[][]): number[] {
    let ans = [];
    for (let i in queries) {
        A[queries[i][1]] += queries[i][0];
        let sum = 0;
        for (let element of A) {
            if (element % 2 === 0) sum += element;
        }
        ans.push(sum);
    }
    return ans;
};