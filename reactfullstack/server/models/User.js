const {Schema,model} = require("mongoose")
const bookSchema = require("./Book")
const bcrypt = require ("bcrypt")
const userSchema= new Schema (
    {
        username: {
            type:String,
            required:true,
            unique: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            match:[/.+@+\..+/, "please use valid format"]
                        //REQUIRES AN EMAIL ADDRESS ONLY IN THIS FIELD

        },
        password: {
            type:String,
            required:true
        },
        faveBooks: [bookSchema]
                        //when objects get complicated you can create a seperate schema here.
    }
)
userSchema.methods.isPassCorrrect= async function(pass){
 return bcrypt.compare(pass, this.pass)
}
const User=model("User", userSchema)

module.exports= User