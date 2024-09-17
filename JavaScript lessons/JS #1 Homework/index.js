alert("Sveiki atvykę, šis puslapis vadinasi Mano puslapio pavadinimas");
document.title = "Company Name, UAB solutions - Document";
/// STACIAKAMPIO PLOTAS
function staciakampioApskaiciavimas(a, b) {
  let plotas = a * b;
  let perimetras = 2 * a + 2 * b;
  let matavimoVienetas = "m";

  console.log(
    "Stačiakampio kraštinė A:" +
      a +
      matavimoVienetas +
      "\n" +
      "Stačiakampio kraštinė B: " +
      b +
      matavimoVienetas +
      "\n" +
      "Plotas: " +
      plotas.toFixed(2) +
      `${matavimoVienetas}² `,
    "\n" + "Perimetras: " + perimetras.toFixed(2) + matavimoVienetas
  );
}

staciakampioApskaiciavimas(22, 10.2);
