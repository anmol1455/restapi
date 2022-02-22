let express    = require('express'),
    mongoose   = require('mongoose'), 
    bodyParser = require('body-parser');

let app = express();

let apiRoutes = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/restApiDB", {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

const PORT = process.env.port || 3000;

app.get('/', function(req, res){
    res.send("Express is running successfully!");
});

app.use('/api', apiRoutes);

app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
});