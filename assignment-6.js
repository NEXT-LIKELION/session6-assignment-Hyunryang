//1
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

const revisedUsers = users.map(({ name, age }) => ({
    name,
    age,
    status: age >= 18 ? "성인" : "미성년자",
}));
console.log(revisedUsers);

//2
const person = {
    name: "David",
    city: "London",
    age: 30,
};

for (key in person) {
    if (typeof person[key] === "string") {
        person[key] += " (확인됨)";
    }
}
console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

const long_words = words.filter((word) => word.length >= 5);

console.log(long_words);

// 3 완료

const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

let evenNumbers = numbers.filter((value) => value % 2 === 0);

let sqauredNumbers = evenNumbers.map((evennumber) => evennumber ** 2);

let sum = sqauredNumbers.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    0
);

console.log(sum);

//4

const jsonString = `[
    { "id" : 1, "name" : "Alice", "age" : 25, "email": "alice@example.com" },
    { "id" : 2, "name" : "Bob", "age": 30, "email": "bob@example.com"},
    { "id" : 3, "name" : "Charlie", "age": 35, "email": "charlie@example.com"}
    ]
    `;

const parsed = JSON.parse(jsonString);

const resultString = parsed.map(({ id, name, age, email }) => ({
    id,
    name,
    age,
}));

console.log(resultString);

// 5

const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    if (key === "id" || key === "name" || key === "email" || key === "role")
        return obj[key];
    // if (key in obj)
    else return "키 없음";
}

console.log(getUserData(user, "name"));
console.log(getUserData(user, "email"));
console.log(getUserData(user, "age"));
