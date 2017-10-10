var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(port, function() {
  console.log("listening on port", port);
});