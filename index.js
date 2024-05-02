const express = require("express");
const app = express();

const path = require("path");

const task_lists = require("./TASK_LISTS.json");

const port = 8000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index"));

app.listen(port, () => console.log("http://localhost:" + port));
