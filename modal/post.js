const mongoose = require('mongoose')

const post_schema = mongoose.Schema({
    title: {
        type: String
    },
    name:{
        type:String
    }
})

module.export = mongoose.model("post",post_schema)