const express = require("express")
const { getUsers, addUser } = require("../controllers/usersController")
const decorateHtmlResponce = require("../middleware/common/decorateHtmlResponce")
const avaterUpload = require("../middleware/users/avaterUpload")
const { addUserValidators } = require("../middleware/users/userValidator")

const routes = express()
routes.get("/",decorateHtmlResponce("Users"),getUsers)
routes.post("/",avaterUpload,addUserValidators,addUser )


module.exports = routes