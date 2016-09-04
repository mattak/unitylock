var webpack              = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config               = require('../webpack.config')
import Row    from './row'
import Helper from './helper'

var app        = new (require('express'))()
var bodyParser = require('body-parser')
var port = process.env.SERVER_PORT || 3000
var helper = new Helper("lock.json");

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath } ))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

// RES: [{path:,owner:,updated_at:}]
app.get('/files', (req, res) => {
  helper
    .search()
    .then(it => { res.json(it) })
    .catch(err => {
      console.log("error: " + err)
      res.status(500).send(err)
    })
})

// BODY: [path]
app.post('/files', (req, res) => {
  var files = req.body
  helper
    .create_or_update_by_pathes(files)
    .then(it => { console.log("res: " + it); res.json(it) })
    .catch(err => {
      console.log("error: " + err)
      res.status(500).send(err)
    })
})

// BODY: path
app.put('/user/:name/lock', (req, res) => {
  var row = new Row(req.body.file)
  row.lock(req.params.name)
})

app.put('/user/:name/unlock', (req, res) => {

})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info("Rendering port %s", port)
  }
});

