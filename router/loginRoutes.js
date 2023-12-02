const express = require("express")
const { getLogin } = require("../controllers/loginController")
const decorateHtmlResponce = require("../middleware/common/decorateHtmlResponce")

const routes = express()
routes.get("/",decorateHtmlResponce("Login"),getLogin)


module.exports = routes