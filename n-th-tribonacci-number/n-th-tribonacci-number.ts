function tribonacci(n: number): number {
    if (memory[n] !== undefined) return memory[n];
    for (let i = 3; i <= n; i++) {
        memory[i] = memory[i - 1] + memory[i - 2] + memory[i - 3];
    }
    return memory[n];
};

const memory = {
    0: 0,
    1: 1,
    2: 1,
};