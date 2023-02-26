import Express from "express";
import "dotenv/config";
import "./database/dbConnect.js";

const app = Express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world MEOW");
});
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
