const todo = {
    id: "123",
    text: "Pay the bills",
    completed: "false"
}

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`);
}
printTodo(todo)

const { text:todoText, completed, details = "None", ...others } = todo

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65, 0, 13]
// order of destructuring is important
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges);

