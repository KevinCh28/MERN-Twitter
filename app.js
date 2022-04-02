const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!")
});

const port = process.env.PORT || 5000;    //if we are in production use that port for heroku else localhost:5000

app.listen(port, () => console.log(`Server is running on port ${port}`));