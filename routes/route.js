const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/blog", controller.getBlog);
router.get("/", controller.getBlog);

router.post("/blog", controller.postBlog);

router.get("/delete", controller.deleteBlog);

router.get("/update", controller.updateBlog);

router.post("/updateBlog", controller.updateChanges);

router.get("/details", controller.showDetails);

router.get("/actors", controller.getActors);

router.post("/actors", controller.postActors);

router.get("/deleteActor", controller.deleteActor);

module.exports = router;
