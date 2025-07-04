const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eventNumbers = numbers.filter((num) => num % 2 === 0);

console.log(eventNumbers);

const users = [
  { name: "jae", age: 25 },
  { name: "sung", age: 30 },
];

const names = users.map((user) => user.name);
console.log(names);

function greet(name, age) {
  return `이름은 ${name}, 나이는 ${age}`;
}

console.log(greet(users[0].name, users[0].age));

function checkNumber(numbers) {
  if (numbers > 30) {
    return "10보다 큽니다";
  } else if (numbers < 10) {
    return "30보다 큽니다";
  } else {
    return "10과 30 사이입니다";
  }
}

console.log(checkNumber(users[0].age));
