
const express = require('express')
//const app = require('express')()

const app = express()


app.set('view engine','ejs')


app.get('/',(req,res)=>{
    const name = '- Ajaya Sauden'
    res.render('home.ejs',{data: name})
})

app.get('/register',(req,res)=>{
    res.render("auth/register")
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


