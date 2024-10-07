const mas = ["labas", 4, { name: "1", name: "s" }, "reiksme", "temperatura"];

function printAll(...values) {
  for (const element of values) console.log(element);
}

printAll(...mas);
