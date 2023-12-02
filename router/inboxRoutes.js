const express = require("express")
const { getInbox } = require("../controllers/inboxController")
const decorateHtmlResponce = require("../middleware/common/decorateHtmlResponce")

const routes = express()
routes.get("/",decorateHtmlResponce("Inbox"),getInbox)


module.exports = routes