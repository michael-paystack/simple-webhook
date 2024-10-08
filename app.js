const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});


app.get("/", (request, response) => {
  response.send("Running");
});

app.post("/hook", (request, response) => {
  console.log(JSON.stringify(request.body));
  response.json();
});