import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb+srv://PunkVise:Cementash12@cluster0.gxn81.mongodb.net/gamepunklogindetails?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},function(){
    console.log("Connected to DB successfully");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const postSchema = new mongoose.Schema({
    user: String,
    game: String,
    category: String,
    title: String,
    content: String
})

const User = new mongoose.model("User",userSchema)
const Post = new mongoose.model("Post",postSchema)

//Routes

app.post("/register",function(req,res){
    // console.log(req.body)
    const {username,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            console.log("Already Registered")
        }

        else{

            const user = new User({
                name: username,
                email: email,
                password: password
            })
        
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                else{
                    console.log("Succesfully Registered")
                }
            })

        }
    })


    
})

app.post("/login",function(req,res){
    const {username,password}=req.body
    User.findOne({name:username,password:password},(err,user)=>{
        if(user){
            console.log("Login successful")
            res.send({message:"Login successful",user:user})
        }
        else{
            console.log("User not registered")
            res.send({message:"User not registered"})
        }
    })
    // res.send(username)
})

app.post("/createpost",function(req,res){
    const {user,game,category,title,content} = req.body
    const post = new Post({
        user:user,
        game:game,
        category:category,
        title:title,
        content:content
    })

    post.save(err =>{
        if(err){
            res.send(err)
        }
        else{
            res.send("hi")
            console.log("Succesfully posted")
        }
    })
})

app.get("/allposts",function(req,res){
    Post.find({},(err,post)=>{
        if(post){
            // console.log("posts sent")
            // console.log(post)
            res.send({post:post})
        }
    })
})

app.get("/cat1",function(req,res){
    Post.find({category:"1"},(err,post)=>{
        if(post){
            // console.log("posts sent")
            // console.log(post)
            res.send({post:post})
        }
    })
})

app.get("/cat2",function(req,res){
    Post.find({category:"2"},(err,post)=>{
        if(post){
            // console.log("posts sent")
            // console.log(post)
            res.send({post:post})
        }
    })
})

app.get("/cat3",function(req,res){
    Post.find({category:"3"},(err,post)=>{
        if(post){
            // console.log("posts sent")
            // console.log(post)
            res.send({post:post})
        }
    })
})


app.listen(5000,function(){
    console.log("Server running on port 5000");
})

