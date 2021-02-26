const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.server = http.createServer(app);

app.server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Server running on port ${port}`);
})
  
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
require("../routes/general.routes.js")(app);

module.exports = app

app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
});
