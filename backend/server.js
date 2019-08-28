var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.post('/posts', function(req, res) {

    console.log("posts!",req.body);

    res.status(200).send({hello:req.body})
});

app.listen(process.env.PORT || 8080)
console.log("server up..!!")