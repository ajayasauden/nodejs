
const { localsName } = require('ejs')
const express = require('express')
//const app = require('express')()

const app = express()
// console.log(app)


app.set('view engine','ejs')




app.get('/',(req,res)=>{
    const name = 'Ajaya Sauden'
    const address = "Jhapa"
    res.render('home.ejs',{data: name, address})
})


app.get("/about",(req,res)=>{
    res.render('about')
})


app.listen(3000,()=>{
    console.log("project has started at port 3000")
})


