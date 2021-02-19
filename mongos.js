const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://atul:atul@cluster0.00vwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritys/sample_analytics",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('conecteddddddddddddddddddddddddd')
})
