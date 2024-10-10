/* 
1. Susirinkti inputų reikšmes į objektą, ir pridėti į bendrą masyvą.
2. Pridėtą produktą išsaugoti localStorage
3. Pridėti pašalinimo funkcionalumą
4. Pridėti atnaujinimo funkcionalumą
*/

const productsJSON = localStorage.getItem("products");
const products = productsJSON === null ? [] : JSON.parse(productsJSON);
let nowUpdatingProductIndex = 0;
updateHtmlTable(products);
