const {Schema,model} = require("mongoose")
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
const User=model("User", userSchema)

module.exports= User