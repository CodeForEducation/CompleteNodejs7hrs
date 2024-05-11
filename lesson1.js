const http= require('http')
const fsPromise= require('fs').promise
const PORT=2000
const myServer= http.createServer((req,res)=>
{
    console.log(req.url,req.method);

})
myServer.listen(5000,()=>
{
  console.log(`Server running at ${PORT}`)
})
