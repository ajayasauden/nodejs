
// const express = require('express')
// //const app = require('express')()

// const app = express()
// // console.log(app)

// app.listen(3000,()=>{
//     console.log("project has started at port 3000")
// })

// app.get('/',(req,res)=>{
//     const name="Manish Basnet"
//     const address = "Jhapa"
//     res.render('home.ejs',{data:name,address})
// })


// app.get("/about",(req,res)=>{
//     res.render('about')
// })

const express = require('express')
const app = express()

app.get('/',(req,res)=>
{
    res.send("<h1>This is home page</h1>")

})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.get('/contact',(req,res)=>
{
    res.send("This is contact page")
})
app.listen(4000,()=>{
    console.log("Project has started at 4000")
})




