const express=require('express');
const app=express();
const port=process.env.PORT || 8900;
const path=require('path');
const hbs=require('hbs');
const publicStaticPath=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,"../templates/partials");
console.log(partials_path);


app.use(express.static(publicStaticPath));

app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.get('/',(req,res)=>
{
  res.render('index');
});
app.get('/about',(req,res)=>
{
  res.render('about');
});
app.get('/weather',(req,res)=>
{
  res.render('weather');
});
app.get('*',(req,res)=>
{
  res.render('404error',{errormsg:"Opps!!! page not found"});
});

app.listen(port,()=>
{
    console.log("Port running at ",port);
})