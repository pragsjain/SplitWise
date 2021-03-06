const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const http = require('http');
const appConfig = require('./config/appConfig');
const logger = require('./app/libs/loggerLib');
const routeLoggerMiddleware = require('./app/middlewares/routeLogger.js');
const globalErrorMiddleware = require('./app/middlewares/appErrorHandler');
const mongoose = require('mongoose');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
//const cors =require('cors')


app.use(morgan('dev'));

app.use(bodyParser.json());
//This object will contain key-value pairs, 
//where the value can be a string or array (when extended is false),
// or any type (when extended is true).
app.use(bodyParser.urlencoded({ extended: true }));

//to make the uploads folder public
app.use('/uploads',express.static('uploads'));



app.use(express.static(path.join(__dirname, 'public')));
app.use(routeLoggerMiddleware.logIp);
app.use(globalErrorMiddleware.globalErrorHandler);


app.use(express.static(path.join(__dirname, 'client')));


const modelsPath = './app/models';
const controllersPath = './app/controllers';
const libsPath = './app/libs';
const middlewaresPath = './app/middlewares';
const routesPath = './app/routes';

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});

//Bootstrap models
fs.readdirSync(modelsPath).forEach(function (file) {
  if (~file.indexOf('.js')) require(modelsPath + '/' + file)
});
// end Bootstrap models

// Bootstrap route
// const issueController = require("./app/controllers/issueController");
// let baseUrl = `${appConfig.apiVersion}/issues`;
// app.post(baseUrl+'/create', upload.single('image'),issueController.createIssue);

fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    let route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
});

// end bootstrap route

// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler);
// end global 404 handler



/**
 * Create HTTP server.
 */

const server = http.createServer(app);
//app.use(cors());
// start listening to http server
//console.log(appConfig);
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);

//end server listening code
const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', (msg) => {
      console.log(`user disconnected->${msg}`);
    });
    socket.on('sendnotification', (msg) => {
      console.log(`sendnotification`);
      socket.broadcast.emit('notification',msg );
      sendMail(msg)
    }); 
  });

function sendMail(msg){
  msg.expenseMembers.forEach(element => {
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'atestmail2020@gmail.com',
            pass: 'atestmail'
        },
        secure: true,
        requireTLS: false,
        tls: {
            rejectUnauthorized: false
        }
      });

    let expenseHistoryNotes=`${msg.expenseHistoryObj.expenseHistoryNotesBy} \n\n`;
    if(msg.expenseHistoryObj.expenseHistoryNotes){
            msg.expenseHistoryObj.expenseHistoryNotes.forEach(element => {
              expenseHistoryNotes=expenseHistoryNotes+`- ${element} \n`;
            });
      }
    var mailOptions = {
        to: element.email,
        from: 'atestmail2020@gmail.com',
        subject: msg.expenseHistoryObj.expenseHistoryNotesBy,
        text:  'Greetings from SplitWise!'+'\n\n' + expenseHistoryNotes+ '\n\n' +
        'Have a nice day ! \n' 
    }
    transporter.sendMail(mailOptions, (err, info) => {
        console.log('err', err);
        console.log('info', info);
    })
  })
}



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
    throw error;
  }


  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(error.code + appConfig.port+ ':port is already in use.', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    default:
      logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  ('Listening on ' + bind);
  logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
  let db = mongoose.connect(appConfig.db.uri,{ useMongoClient: true });
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});


/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
  console.log('database connection error');
  console.log(err)
  logger.error(err,
    'mongoose connection on error handler', 10)
  //process.exit(1)
}); // end mongoose connection error

mongoose.connection.on('open', function (err) {
  if (err) {
    console.log("database error");
    console.log(err);
    logger.error(err, 'mongoose connection open handler', 10)
  } else {
    console.log("database connection open success");
    logger.info("database connection open",
      'database connection open handler', 10)
  }
  //process.exit(1)
}); // enr mongoose connection open handler



// end socketio connection handler



module.exports = app;
