let svoris = prompt("Koks yra jūsų svoris (KG)");
svoris = Number(svoris);

if (svoris <= 400 && svoris >= 10) {
  let svoris_gramais = svoris * 1000;
  document.write(
    `<h1 style="font-size:24px; font-weight:normal;">Jūsų svoris kilogramais <b>${svoris}</b>kg <br/></h1>`
  );
  document.write(
    `<h1 style="font-size:24px; font-weight:normal;">Jūsų svoris gramais <b>${svoris_gramais}</b>g</h1>`
  );
} else {
  alert("Neteisingai įvestas svoris!");
}
