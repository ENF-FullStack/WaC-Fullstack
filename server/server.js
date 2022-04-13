let serverPort=9000, webDir="../wwwroot";

let express = require('express');
let app = express();

let passport=require('passport');
let BasicStrategy=require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function(userid, password, done) {
        if ((userid=='tim') && (password=='123')) return done(null,{email:'tim@test.net'});
        return done(null,false);
}));

app.use('/protected/*',passport.authenticate('basic', { session: false }),function(req,resp,next){
    next();
});

app.use(express.static(webDir));
app.use('/protected',express.static('../protected'));


let session=require('express-session');
app.use(session({
    secret:"Ihan mitä vaan",
    resave:false,
    saveUninitialized:false
}));

/*
app.use('/api/*',function(req,resp,next){
    if (!req.session.counter) req.session.counter=1;
    else req.session.counter++;
    console.log(req.path,req.session.counter,req.session.user);
    if (req.session.user) next();
    else resp.status(403).json({error:'denied'});
})
*/
let bodyParser = require('body-parser')
app.use(bodyParser.raw({type:'image/*'}));

let bookApi=require('./bookapi');
bookApi(app);
let authorApi=require('./authorapi');
authorApi(app);
require('./userapi')(app);

require('./websocket')(9001);

const path = require('path')
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, webDir, 'index.html'))
})


app.listen(serverPort);

console.log('Server listening on http://localhost:'+serverPort);
console.log('Distributing site from: '+webDir);