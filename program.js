var http = require('http')
var exec = require('child_process').exec

var connect = require('connect')
var app = connect()

var compression = require('compression')
app.use(compression())

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

var serveStatic = require('serve-static')
app.use(serveStatic('www'))

app.use('/api', function apiMiddleware(req, res, next){
  if (/edgeLit/i.test(req.url)) { // /api/edgeLit
    exec('sh edgeLit.sh')
    res.end(JSON.stringify({operation:'edgeLit',status:'complete'}))
  }
  else if (/avgLit/i.test(req.url)) { // /api/avgLit
    exec('sh avgLit.sh')
    res.end(JSON.stringify({operation:'avgLit',status:'complete'}))
  }
  else if (/moodLit/i.test(req.url)) { // /api/moodLit
    exec('sh moodLit.sh')
    res.end(JSON.stringify({operation:'moodLit',status:'complete'}))
  }
  else if (/lightsOff/i.test(req.url)) { // /api/lightsOff
    exec('pkill -SIGINT ambi')
    res.end(JSON.stringify({operation:'lightsOff',status:'complete'}))
  }
  next()
})

http.createServer(app).listen(80)
