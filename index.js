const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require ('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const expressOasGenerator = require('express-oas-generator');
const profsRouter = require('./routers/profsRouter').router;
const messagesRouter = require('./routers/messagesRouter').router;

const app = express();

expressOasGenerator.handleResponses(app, {});

let whitelist = ['http://loclahost:8090'];
let corsOptions = {
    origin : function( req, callback ){
        if ( whitelist.indexOf(req) !== -1 ){
            callback(null, true);
        }
        else{
            callback(null, false );
        }
    }
};

app.use(cors());

const accessLogSTream = rfs.createStream('access.log',{
    interval : "1d",
    path : path.join(__dirname, 'log')
});

app.use(morgan('combined', { stream : accessLogSTream}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use('/api/v2', profsRouter);
app.use('/api/v2', messagesRouter);

app.get('/', (req,res ) => {
    res.send ("Mon APi RESTFULL");
});

expressOasGenerator.handleRequests();

app.listen(3005, () => {
    console.log("Ecoute sur un port !" );
});