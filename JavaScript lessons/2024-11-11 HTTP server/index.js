const htpp = require("http");

htpp
  .createServer((request, response) => {
    console.log(request.url, request.method);

    // GET ENDPOINT /a
    if (request.url === "/a" && request.method === "GET") {
      response.write(JSON.stringify({ data: "A" }));
    } // POST ENDPOINT /a
    else if (request.url === "/a" && request.method === "POST") {
      response.write(JSON.stringify({ data: "A Post request got." }));
    } // GET ENDPOINT /b
    else if (request.url === "/b" && request.method === "GET") {
      response.write(JSON.stringify({ data: "B" }));
    } // other routes
    else {
      response.write("Route not found!");
    }
    response.end();
  })
  .listen(8080, () => {
    console.log("Sėkmingai paleistas serveris su prievadu 8080");
  });
