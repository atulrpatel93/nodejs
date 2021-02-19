const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

// database connection 
require("./mongos")

//modals
require("./modal/post")


// middleware
app.use(bodyParser.json())

const post = mongoose.model("post")

app.get("/post", async (req,res) => {
try {
    const post = await post.find({});
    res.send(post)
} catch (error) {
    res.status(5000)
}
})
app.post("/post", async (req,res) => {
   
    try {
        const post = new post();
        post.title = req.body.title;
        post.name = req.body.name;
        await post.save();
        res.send(post)
    } catch (error) {
        res.status(5000)
    }
   

    })

// app.get(process.env.dbUrl,(req,res)=>{
//     res.send('hlooo')
// })

app.listen(3000);

// mongoose.connect(dbUrl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log('conecteddddddddddddddddddddddddd')
// }
// )
 