const mongoose = require('mongoose')
const { Schema } = mongoose;
const post_schema = new Schema({
    title: {
        type: String
    },
    name:{
        type:String
    }
})

module.export = mongoose.model("Post",post_schema)