import * as fs from "fs";

export function readFromUsersFile() {
  const resultEncoded = fs.readFileSync("./users.json", "utf-8");
  const stringifyJSON = resultEncoded.toString();
  return JSON.parse(stringifyJSON);
}

export function writeToUsersFile(users) {
  fs.writeFileSync("./users.json", JSON.stringify(users));
}
