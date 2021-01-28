var path = require("path")
var express = require("express")
var app = express();

// Express middleware for serving static files
//app.use(express.static(path.join(__dirname, "pkcn_web")));
app.use(express.static(__dirname));

//hello is another callback
app.get('/', (req, res) => {
    res.redirect("/index.html")
})

function hello(request, response) {
    //response.send("Hello world test");
    console.log(request.path);
    response.sendFile('/index.html', {root: __dirname })
}

// 'listen' is a callback function
var server = app.listen(process.env.PORT || 3000, listen);

function listen(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app is listening at http://" + host + ":" + port);
}