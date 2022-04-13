/*
1.  Experiment a little with http-server given here

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var urlObject = JSON.stringify(url.parse(req.url, true));
    var doc = `<html><body>
                    <p>Hello World!</p>
                    <p>${urlObject}</p>
                </body></html>`
    res.write(doc);
    res.end();
}).listen(8000);
*/


/*
2.  Http-module can also be used to make http-requests:
    - http.get('url',function(resp){...})

    Call some api of earlier servers
*/

/*
3.  Create a cluster around the server.js

*/

