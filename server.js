var restify    =    require('restify');
var mongojs    =    require('mongojs');
var morgan     =    require('morgan');
var db         =    mongojs('mongodb://<mongolabusername>:<mongolabpassword>@<mongolabsrvid>.mongolab.com:<mongolabport>/bucketlistapp', ['appUsers','bucketLists']);
var server     =    restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev')); //LOGGER

// CORS
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Method', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.listen(process.env.PORT || 3000, function () {
  console.log("Server started @ ",process.env.PORT || 3000);
});

var manageUsers =   require('./auth/manageUser') (server, db);
var manageLists =   require('./list/manageList') (server, db);
