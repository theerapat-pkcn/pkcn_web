var express = require("express")
var app = express();

// 'listen' is a callback function
var server = app.listen(process.env.PORT || 3000, listen);

function listen(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app is listening at http://" + host + ":" + port);
}

//hello is another callback
app.get('/', hello)

function hello(request, response) {
    //response.send("Hello world test");
    response.sendFile('/index.html', {root: __dirname })
}