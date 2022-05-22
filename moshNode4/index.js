const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
// app.post();
// app.put();
// app.delete();

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Listening to ${port}...`));
