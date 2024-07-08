
const express = require('express')
const { users } = require('./model/index')
//const app = require('express')()
const app = express()
require("./model/index")

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

app.get("/users",async (req,res)=>{
      const data = await users.findAll()
      res.json({
        data
      })
})

app.post("/register", async (req,res)=>{
    // console.log(req.body)
    const {username,email,password} = req.body
     //column name: value
    await users.create({
        // email:email,
        // password:password,
        // username:username
        email,
        password,
        username    
    })
    res.send("Registered successfully")


})

app.get("/login",(req,res)=>{
    res.render("auth/login")
})

app.use(express.static('public/css/'))
app.use(express.static('public/css/'))

const PORT=3000
app.listen(PORT,()=>{
    console.log(`project has started at PORT ${PORT}`)
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


