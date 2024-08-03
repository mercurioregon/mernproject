const {Schema}=require("mongoose")

const bookSchema= new Schema ({
    authors:[
        {
            type:String
        }
    ],
    description: {
        type:String,
        require:true
    },
    image: {
        type:String,
        
    },
    link: {
        type:String
    },
    title: {
        type:String,
        required:true
    }

})
