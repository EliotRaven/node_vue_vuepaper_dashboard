const express    = require('express'),
      path       = require('path'),
      bodyParser = require('body-parser'),
      logger     = require('morgan'),
      cors       = require('cors'),
      app        = express(),
      server     = require('http').Server(app),
      io         = require('socket.io')(server),
      fs         = require('fs');

const authRouter = require('./routes/auth')
const apiRouter = require('./routes/api')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));

app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);
app.use('/', (req, res, next) => {
    console.log(req.path)
    next()
});

// error handler
app.use(function(err, req, res, next) {

    console.log('err handler', err)

    res.status(err.status || 500).send(err)
});

module.exports = app;