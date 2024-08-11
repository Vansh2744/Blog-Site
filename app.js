const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "./css")));
hbs.registerPartials(path.join(__dirname, "views", "partials"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

const routeHandler = require("./routes/route");
app.use("/", routeHandler);
app.post("/blog", async (req, res) => {
  const { title, discription } = req.body;
  await blogs.create({ title, discription });
  res.redirect("/blog");
});

mongoose
  .connect("mongodb://localhost:27017/MyBlog")
  .then(() => {
    app.listen(3000, () => {
      console.log("listening......");
    });
  })
  .catch((err) => {
    console.log(err);
  });
