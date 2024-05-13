const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
// ^/ -----meaning begining with slash /$--------maining ending with slash |  or if the route is index.html
app.get('^/$|/index(.html)?', (req, res)=>{  //  (.html)? it mean .html is optional and this syntax is from regex
//app.get('/', (req, res) => {
  //  res.sendFile((path.join(__dirname,'./views/index.html')))
  //res.sendFile(path.join(__dirname,'views','index.html'))
 res.sendFile('./views/index.html',{root:__dirname})
  
});
app.get('/newpage(.html)?',(req,res)=>res.sendFile(path.join(__dirname,'views','newpage.html')))
app.get('/old-page(.html)?',(req,res)=>res.redirect(301,'./newpage.html'))// 302 is default it is temoporary redirect

/*app.get('/*',(req,res=>
    {
        res.sendFile(path.join(__dirname,'views','./newpage.html'))
    }
))
*/
//Route handlers
app.get('/hello(.html)?',(req,res,next)=>{console.log('attempted to load hello.html');
next()},
(req,res)=>{
    res.send("Hello WORLD")})
// chain route handlers
const one = (req,res,next)=>
    {
        console.log('one')
        next();
    }
    const   Two = (req,res,next)=>
        {
            console.log('Two')
            next()
        }
        const Three = (req,res)=>
            {
                console.log('Three')
                res.send('Finished')
            }
            app.get('/chain(.html)?',[one,Two,Three])
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

