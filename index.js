const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()
const cookieParser = require("cookie-parser")
const {notFoundHandaler,errorHandeler } = require("./middleware/common/errorHandaler")
const loginRoutes = require("./router/loginRoutes")
const usersRoutes = require("./router/usersRoutes")
const inboxRoutes = require("./router/inboxRoutes")

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views","views")
app.use(express.static("public"),)
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use("/",loginRoutes)
app.use("/users",usersRoutes)
app.use("/inbox",inboxRoutes)
app.use(notFoundHandaler)
app.use(errorHandeler)

















const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.trq2z.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {
    app.listen(port,()=> console.log("server is running on port 5000"))
    console.log("database is connected");
})
.catch(res=> console.log(res))