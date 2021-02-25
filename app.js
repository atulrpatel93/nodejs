const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

// database connection 
require("./mongos")


// middleware
app.use(bodyParser.json())

const post_schema = new mongoose.Schema({
    title: String,
    name: String
})

const PostModal = new mongoose.model("post",post_schema)


app.get("/post", async (req,res) => {
try {
    const postsss = await PostModal.find({});
    res.send(postsss)
} catch (error) {
    res.status(5000)
}
})
app.get("/", async (req,res) => {
    res.send('welcome')
});

app.post("/post", async (req,res) => {
    try {
        const post = new PostModal();
        post.title = req.body.title;
        post.name = req.body.name;
        await post.save((err,result) => {
            if(err){
                res.send(err)
            }
            else{
                res.send({
                    succsess:true,result
                })
            }
        });
        // res.send(post)
    } catch (error) {
        res.status(5000)
    }
   

    })

app.listen(3000);
