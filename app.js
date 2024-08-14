
const express = require('express')
const { users } = require('./model/index')
//const app = require('express')()
const app = express()
require("./model/index")

const bcrypt = require('bcrypt')

app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))//ssr
app.use(express.json())//external like react, vuejs

app.get('/',(req,res)=>{
    const name = '- Ajaya Sauden'
    res.render('home.ejs',{data: name})
})


app.get('/register',(req,res)=>{
    res.render("auth/register")
})

// app.get("/users",async (req,res)=>{
//       const data = await users.findAll()
//       res.json({
//         data
//       })
// })

app.post("/register", async (req,res)=>{
    // console.log(req.body)
    const {username,email,password} = req.body
     //column name: value
     if(!username || !password || !email){
        return res.send("Enter username , email and password")
     }
    //  const data = await users.findAll({
    //     where:{
    //         email : email
    //     }
    //  })
    //  if(data.length > 0){
    //     return res.send("email already registered")
    //  }
    //  res.send("email already exist")
    await users.create({
        // email:email,
        // password:password,
        // username:username
        email,
        password : bcrypt.hashSync(password,10),  //hashing password- bowlfish algorithm
        username    
    })
    res.send("Registered successfully")
})

app.get("/login",(req,res)=>{
    res.render("auth/login")
})
app.post("/login",async (req,res)=>{
    console.log(req.body)
    const { email,password }=req.body
    if( !email || !password){
        return res.send("Enter email and password")
    }
    //email check
    // array destructuring
    const [data] = await users.findAll({
        where:{
            email : email
        }
    })
    if(data){
        //password check
        const isMatched = bcrypt.compareSync(password,data.password)
        if (isMatched){
            res.send("Login successfully")
        }
        else{
            res.send("Invalid /email or/ password")
        }
    }
    
    else{
        res.send("No user with that email")
    }
    
})

app.use(express.static('public/css/'))
app.use(express.static('public/css/'))

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Project has started at PORT ${PORT}`)
})

//rest api
/*
/getBlogs- get
/singleblog/:id-get
/deleteblog/:id-delete
/addblog-post
*/

//restful api
/*
/blogs- get, post
/blogs/:id - get , patch/put , delete
*/