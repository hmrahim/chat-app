const mongoose = require("mongoose")

const peopleSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
        },
        mobile:{
            type:String,
            required:true
        },
        passowrd:{
            type:String,
            required:true
        },
        avater:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["admin","üser"],
            default:"user"
        }
    },
    {
        timestamps:true
    }
)

const People = mongoose.model("People",peopleSchema)

module.exports = People