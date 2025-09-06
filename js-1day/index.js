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

const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const total = numbers2.reduce((acc, cur) => acc + cur, 0);

console.log(total);


let todos = ['공부', '운동', '독서'];
todos.push('요리');
todos = todos.filter((item) => item !== '운동');
console.log(todos);