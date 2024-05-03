console.log("------1------");
// Task 1
for (let i = 0; i < 10; i++) {
    let num = i * i;
    console.log(num);
}

console.log("------2------");
// Task 2
let task_2 = ["5", "4", "3", "2", "1", "Blastoff!"];
for (let i = 0; i < task_2.length; i++) {
    console.log(task_2[i]);
}

console.log("------3------");
// Task 3 
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

console.log("------4------");
// Task 4
sum = 0
for (let i = 0; i <= 100; i++) {
    sum = sum + i
    console.log(sum);
}

console.log("------5------");
//Task 5
for (let j = 0; j < 10; j++) {
    let n = 1
    for (let i = j; i >= 1; i--) {
        n = n * i;
    }
    console.log(n)
}

// 10! = 3,628,800

console.log("------6------");
// Task 6
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("------7------");
// Task 7 
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-i - 1));
}

console.log("------8------");
// Task 8
let arr8 = [];
for (let i = 0; i < 10; i++) {
    arr8.push(i * i * i);
}
console.log(arr8);

console.log("------9------");
// Task 9
let fib = [];
fib.push(1, 1)
for (let i = 2; i <= 10; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
}
console.log(fib);

console.log("------10------");
// Task 10
let arr_reverse = [];
while (arr.length > 0) {
    num = arr.pop();
    arr_reverse.push(num);
    console.log(arr_reverse);
}

