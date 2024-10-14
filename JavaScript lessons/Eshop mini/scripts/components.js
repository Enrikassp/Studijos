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

function nav() {
  return `
        <div class="leftSide">
          <h1>Mano parduotuvė</h1>
        </div>

        <div class="rightSide">
          <ul>
            <li><a href="/shop">Parduotuvė</a></li>
            <li><a href="/">Dashboard</a></li>
          </ul>
        </div>
  `;
}

function fillNavs() {
  const navigations = document.querySelectorAll("Navigation");
  console.log(navigations);
  for (const navigation of navigations) {
    console.log(navigation);
    navigation.innerHTML = nav();
  }
}

fillNavs();
