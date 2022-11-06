const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";
let scriptContent = "";
let styleContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html",(err,registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});
fs.readFile("script.js",(err,script) => {
    if (err) {
        throw err;
    }
    scriptContent = script;
});
fs.readFile("style.css",(err,style) => {
    if (err) {
        throw err;
    }
    styleContent = style;
});
   http
    .createServer((request, response) => {
  let url = request.url;
  response.writeHeader(200, { "Content-Type": "text/html" });
  switch (url) {
    case "/project":
      response.write(projectContent);
      response.end();
      break;
    case "/registration":
       response.write(registrationContent);
       response.end();
        break;
    case "/script":
        response.write(scriptContent);
        response.end();
        break;
    case "/style":
        response.write(styleContent);
        response.end();
        break;
    default:
      response.write(homeContent);
      response.end();
      break;  
   }
})
.listen(args["port"]);


