const tableBody = document.querySelector("#tableBody");

export function addRunnerToTable(runner) {
  tableBody.innerHTML += ` 
    <tr begiko-id="${runner.id}">
        <td><i class="bi bi-trash3-fill" onclick="deleteRunner(${runner.id})"></i></td>
        <td>${runner.id}.</td>
        <td>${runner.name}</td>
        <td>${runner.secondName}</td>
        <td>${runner.age}</td>
        <td>${runner.weight}kg</td>
        <td>${runner.category}</td>
    </tr> `;
}

export function istrintiBegika(id) {
  const salinamaEilute = document.querySelector(`[begiko-id="${id}"]`);
  salinamaEilute.remove();
}
