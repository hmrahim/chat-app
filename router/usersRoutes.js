const express = require("express")
const { getUsers } = require("../controllers/usersController")
const decorateHtmlResponce = require("../middleware/common/decorateHtmlResponce")
const avaterUpload = require("../middleware/users/avaterUpload")

const routes = express()
routes.get("/",decorateHtmlResponce("Users"),getUsers)
routes.post("/",avaterUpload)


module.exports = routes