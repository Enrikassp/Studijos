import * as repository from "./repository.js";

const users = await repository.getAllUsers();
generatePeopleList(users);
function generatePeopleList(users) {
  const ulelement = document.querySelector("#people-list");
  let liElementsHtml = "";
  users.forEach((user) => {
    liElementsHtml += `<li>${user.name} - ${user.age}</li>`;
  });

  ulelement.innerHTML = liElementsHtml;
}

// const user = await repository.getUserById(2);
// console.log(user);
// const newUser = await repository.addUser({ name: "Alina", age: 23 });
// console.log(newUser);
// await repository.deleteUserById(5);
// await repository.updateUserById(1, { name: "Siferiukas", age: 99 });

const formElement = document.querySelector("form#my-form");
formElement.addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  console.log(formData.get("name"), formData.get("age"));
  const userNameNumberValidation = /[0-9]/.test(formData.get("name"));
  const userNameSpaceValidation = / /.test(formData.get("name"));

  if (userNameNumberValidation) {
    e.preventDefault();
    alert("Forma negali būti išsiusta, vardas neturi tūrėti skaičių");
  }

  if (userNameSpaceValidation) {
    e.preventDefault();
    alert("Forma negali būti išsiusta, vardas neturi tūrėti tarpelių");
  }

  if (formData.get("age") > 100 || formData.get("age") < 0) {
    e.preventDefault();
    alert(
      "Forma negali būti išsiusta, amžius negali būti didesnis nei 100 metų arba mazesnis nei 0"
    );
  }
});
