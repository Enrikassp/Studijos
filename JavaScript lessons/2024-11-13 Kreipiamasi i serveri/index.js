import * as repository from "./repository.js";

const users = await repository.getAllUsers();
console.log(users);
const user = await repository.getUserById(2);
console.log(user);
// const newUser = await repository.addUser({ name: "Alina", age: 23 });
// console.log(newUser);
// await repository.deleteUserById(5);
await repository.updateUserById(1, { name: "Siferiukas", age: 99 });
