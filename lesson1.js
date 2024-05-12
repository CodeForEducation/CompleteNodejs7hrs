const http = require('http');
const fs = require('fs');
const path = require('path'); // You forgot to import path module

const PORT = 5000; // Corrected port number
const myServer = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
 //   let path ; // Corrected filePath variable
    
    // Checking if request URL is '/' or '/index.html'
    /*
    if (req.url === '/' || req.url === 'index.html') {
        fs.readFile ('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.status=200;
                res.Header('content-type','text/html')
            fs.readFile(Path,'utf-8',(err,data)=>
            {
                res.end(data);
            })
            }

        });
    } else {
        // If URL does not match any known routes, return 404 Not Found
        res.writeHead(404);
        res.end('404 Not Found');
    }
});
*/
switch(req.url)
{
    case '/' :
        res.statusCode=200;
        const filePath=path.join(__dirname,'views','index.html')
        fs.readFile(filePath,'utf-8',(err,data)=>
            {
                res.end(data);
            }
        );
        break;
    }
})



myServer.listen(PORT,()=>
{
    console.log(PORT)
})
