var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session);
//var md5 = require('sha256');
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  secret: 'asdfjkl;qerwtuyiuodfvg;l!@#!SDF',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}));

app.get('/count', function(req, res){
  if(req.session.count){
    req.session.count++;
  }else{
    req.session.count=1;
  }

  res.send('count : ' + req.session.count);
})
app.get('/auth/logout', function(req, res){
  delete req.session.displayName;
  res.redirect('/welcome');
})
app.get('/welcome', function(req, res){
  if(req.session.displayName){
    res.send(`
      <h1>Hello, ${req.session.displayName}</h1>
      <a href="/auth/logout">logout</a>
    `)
  }else {
    res.send(`
      <h1>Welcome</h1>
      <ul>
        <li><a href="/auth/login">login</a></li>
        <li><a href="/auth/register">register</a></li>
      </ul>
      `);
  }
})
var users = [
  {
    username:'sj',
    password:'YxUQXjLPXOwMuCFtrlh9fO+DqnbmdonOavOs33eGM3L9jy6+aqe6/n7B0coQx3zGs2NGHPd7Y0XqIImKl2PNFwQnGDG8qmze6V8Gk1XttJ/BMdZ8uvdX5D8VDQpiS2at3pSkpJ4Vm7vHSiLRacjrI8RNOPyIlONe58MHgCzurlg=',
    salt:'sz8G9wbBct9/vdwRnXrRwlNrVKC38FaEmRqYSlIWufQIQjJ4PLlem+ipzehTC2aeROjkE7r/d9r4AjngXLWYUw==',
    displayName:'sangjun'
  }
];

app.post('/auth/register', function(req, res){
  hasher({password:req.body.password}, function(err, pass, salt, hash){
    var user = {
      username:req.body.username,
      password:hash,
      salt:salt,
      displayName:req.body.displayName
    }
    users.push(user);
    req.session.displayName = req.body.displayName;
    req.session.save(function(){
    res.redirect('/welcome');
    })
  })
})
app.get('/auth/register', function(req, res){
  var output = `
  <h1>Register</h1>
  <form action="/auth/register" method="post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
      <input type="text" name="displayName" placeholder="displayName">
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
  `
  res.send(output);
})
app.post('/auth/login', function(req, res){
  var uname = req.body.username;
  var pwd=req.body.password;
  for(var i = 0; i < users.length; i ++){
/*
    var user = users[i];
    if(uname===user.username && md5(pwd)===user.password){
      //res.send('Hello master');
      req.session.displayName = user.displayName;
      return req.session.save(function(){
        res.redirect('/welcome');
      });
    }*/
    var user = users[i];
    if(uname === user.username){
      return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
        if(hash === user.password){
          req.session.displayName = user.displayName;
          req.session.save(function(){
          res.redirect('/welcome');
          })
        }else {
          res.send('who are you?');
        }
      });
    }
  }
  res.send('who are you?');

})
app.get('/auth/login', function(req, res){
  var output = `
  <h1>Login</h1>
  <form action="/auth/login" method="post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
  `;
  res.send(output);
})
app.listen(3000, function(){
  console.log('connected 3000 port');
});
