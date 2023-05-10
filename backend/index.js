const express = require('express');
const app = express();
const path = require('path')
const port = 4000;
const {testDate}
app.set('views','./views');
app.set("view engine","pug");

// middelware
app.use(express.static(path.join(__dirname,"public")))
// 1 route home page
app.use()
app.get('/',(req,res)=>{
   res.render("home")
})
app.get('/contact',(req,res)=>{
res.render("contact")
})

app.listen(port,()=>{
    if(err){
        console.log('server can not run ')
    }
    console.log('server running with success :)')
})