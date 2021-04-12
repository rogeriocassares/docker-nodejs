var express = require("express");
var app = express();
var indexRouter = express.Router();

var path = __dirname + '/src/views/';
const PORT = 3000;
const HOST = '0.0.0.0';


indexRouter.get('/', function(req, res) {
    console.log("indexRouter /");
    res.sendFile(path + "index.html");
});

indexRouter.get('/sharks', function(req, res) {
    console.log("indexRouter /sharks");
    res.sendFile(path + "sharks.html");
});


indexRouter.use(express.static(path));
app.use('/', indexRouter);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
