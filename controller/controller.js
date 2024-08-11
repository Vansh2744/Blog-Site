const blogs = require("../models/model");
const actors = require("../models/actors");

module.exports.getBlog = async (req, res) => {
  let Blog = await blogs.find().populate("title");
  let Actors = await actors.find();
  res.render("index", {
    Blog,
    Actors,
  });
};

module.exports.postBlog = async (req, res) => {
  const { title, discription } = req.body;
  await blogs.create({ title, discription });
  res.redirect("/blog");
};

module.exports.deleteBlog = async (req, res) => {
  const { id } = req.query;
  await blogs.deleteOne({ _id: id });
  res.redirect("/blog");
};

module.exports.updateBlog = async (req, res) => {
  const { id } = req.query;
  let Blog = await blogs.findOne({ _id: id }).populate("title");
  res.render("update", {
    Blog,
  });
};

module.exports.updateChanges = async (req, res) => {
  const { id, title, discription } = req.body;
  let Blog = await blogs.findOne({ _id: id });
  Blog.title = title;
  Blog.discription = discription;
  await Blog.save();
  res.redirect("/blog");
};

module.exports.showDetails = async (req, res) => {
  const { id } = req.query;
  let Blog = await blogs.findOne({ _id: id }).populate("title");
  res.render("details", {
    Blog,
  });
};

module.exports.getActors = async (req, res) => {
  let Actors = await actors.find();
  res.render("actors", {
    Actors,
  });
};

module.exports.postActors = async (req, res) => {
  const { name, age, imgUrl } = req.body;
  await actors.create({ name, age, imgUrl });
  res.redirect("/actors");
};

module.exports.deleteActor = async (req, res) => {
  const { id } = req.query;
  await actors.deleteOne({ _id: id });
  res.redirect("/actors");
};
