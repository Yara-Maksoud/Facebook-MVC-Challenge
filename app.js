const express = require("express");
const routes = require("./config/routes");
require("./config/mongoose");

const port = 500;

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(port, () => {console.log(`portServer is running on port ${port}`);})

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/', routes);
