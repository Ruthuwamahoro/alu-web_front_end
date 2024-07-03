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

const startTime = performance.now();
const primeCount = countPrimeNumbers();
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
