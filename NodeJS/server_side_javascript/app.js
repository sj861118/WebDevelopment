var express = require('express');

var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/topic', function(req, res){
  //쿼리스트링
  var topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...'
  ]
  var output = `
  <a href="/topic?id=0">Javacript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.query.id]}
  `
  res.send(output);
  //res.send(req.query.id);
})

app.get('/topics/:id/:mode', function(req, res){
  //쿼리스트링
  res.send(req.params.id+','+req.params.mode);
  //res.send(req.query.id);
})

app.get('/template', function(req, res){
  res.render('temp',{time:Date(), _title:'jade'});
})
app.get('/',function(req, res){
  res.send("hello home page");
});
app.get('/route',function(req, res){
  res.send('hello router, <img src="/route.jpg">');
})
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i = 0; i < 5; i ++){
    lis = lis + '<li>coding</li>';
  }
var time = Date();
  var output = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>
`
  res.send(output);
})
app.get('/login',function(req,res){
  res.send("<h1>login please</h1>");
})
app.listen(3000, function(){
  console.log('connected 3000 port');
});
