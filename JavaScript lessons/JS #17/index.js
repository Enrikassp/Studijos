import Marathon from "./classes/Marathon.js";
import Runner from "./classes/Runner.js";

const runner1 = new Runner("Algirdas", "Laiškauskas", 26, 70);
const runner2 = new Runner("Tadas", "Laiškauskas", 26, 55);
const runner3 = new Runner("Enrikas", "Laiškauskas", 26, 92);
const runner4 = new Runner("Zilvinas", "Laiškauskas", 26, 99);

const marathon = new Marathon();

marathon.pridetiBegika(runner1);
marathon.pridetiBegika(runner2);
marathon.pridetiBegika(runner3);
marathon.pridetiBegika(runner4);
