// // create web server
// // http.createServer(function(req, res) {
// // get request url
// var url = req.url;
// // get request method
// var method = req.method;
// // url parse
// var urlParsed = url.parse(url, true);
// // get query string
// var query = urlParsed.query;
// // get pathname
// var pathname = urlParsed.pathname;
// // switch pathname
// switch(pathname) {
//     case '/':
//         // send response
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('Hello world');
//         break;
//     case '/comment':
//         // switch method
//         switch(method) {
//             case 'GET':
//                 // send response
//                 res.writeHead(200, {'Content-Type': 'application/json'});
//                 res.end(JSON.stringify(comments));
//                 break;
//             case 'POST':
//                 // get post data
//                 var postData = '';
//                 req.on('data', function(chunk) {
//                     postData += chunk;
//                 });
//                 req.on('end', function() {
//                     // parse post data
//                     var post = querystring.parse(postData);
//                     // add comment
//                     comments.push(post);
//                     // send response
//                     res.writeHead(200, {'Content-Type': 'application/json'});
//                     res.end(JSON.stringify(comments));
//                 });
//                 break;
//             default:
//                 break;
//         }
//         break;
//     default:
//         break;
// }
// }).listen(3000, 'localhost');
// console.log('Server is running at http://localhost:3000');