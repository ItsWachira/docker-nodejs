const express = require("express");

const app = express();

// PORT
const PORT = 8000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
   res.send("This is home page.");
});

app.post("/", (req, res) => {
   res.send("This is home page with post request.");
});



app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


