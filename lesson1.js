const http = require('http');
const fs = require('fs');
const path = require('path'); // You forgot to import path module

const PORT = 5000; // Corrected port number
const myServer = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    let filePath = '.' + req.url; // Corrected filePath variable
    
    // Checking if request URL is '/' or '/index.html'
    if (filePath === './' || filePath === './index.html') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // If URL does not match any known routes, return 404 Not Found
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

myServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
