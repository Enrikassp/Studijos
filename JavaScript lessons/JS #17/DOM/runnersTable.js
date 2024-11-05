const tableBody = document.querySelector("#tableBody");

export function addRunnerToTable(runner, category) {
  console.log(runner, category);
  tableBody.innerHTML += ` 
    <tr>
        <td>${runner.id}.</td>
        <td>${runner.name}</td>
        <td>${runner.secondName}</td>
        <td>${runner.age}</td>
        <td>${runner.weight}kg</td>
        <td>${category}</td>
    </tr> `;
}
