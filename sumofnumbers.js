"use strict";
function sumFor(numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    console.log(`Sum using for-loop: ${total}`);
    return total;
}
function sumWhile(numbers) {
    let total = 0;
    let i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    console.log(`Sum using while-loop: ${total}`);
    return total;
}
function sumRecursion(numbers, index = 0) {
    if (index >= numbers.length) {
        console.log('Sum using recursion: 0');
        return 0;
    }
    const total = numbers[index] + sumRecursion(numbers, index + 1);
    if (index === 0)
        console.log(`Sum using recursion: ${total}`);
    return total;
}
function sumTheFunctionalWay(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`Sum using functional programming: ${total}`);
    return total;
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
