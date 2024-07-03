function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

const startTotalTime = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const endTotalTime = performance.now();
const totalTime = endTotalTime - startTotalTime;

console.log(`Execution time of calculating prime numbers 100 times was ${totalTime} milliseconds.`);
