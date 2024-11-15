const express = require("express");
const controller = require("../controllers/controller");
const route = express.Router();

route.get('/feed', controller.homePage);
route.post('/add-post', controller.addPost);
route.get('/feed/:postId', controller.showPost);
route.get('/feed/edit/:postId', controller.renderEditPost);
route.post('/editPost/:postId', controller.editPost);
route.get('/deletePost/:postId', controller.deletePost);


module.exports = route;