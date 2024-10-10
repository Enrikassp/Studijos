function deleteIcon(index) {
  return `
  <span class="icon text-red-400" title="Pašalinti produktą" onclick="deleteProduct(${index});">
    <i class="fa-solid fa-xmark"></i>
  </span>`;
}

function updateIcon(index) {
  return `
  <span class="icon text-blue-500" title="Atnaujinti produktą" onclick="openModal(${index})">
    <i class="fa-solid fa-pen-to-square"></i>
  </span>`;
}
