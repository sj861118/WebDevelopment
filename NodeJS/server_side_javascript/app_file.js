var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();

app.set('views', './views_file'); //제이드 파일 경로 설정
app.set('view engine', 'jade'); //템플릿엔진에 제이드 사용 설정
app.locals.pretty = true;

app.use(bodyParser.urlencoded({extended: false}))

app.get('/topic/new', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  });
})

app.post('/topic', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title,description,function(err){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/'+title);
  });
})

app.get(['/topic','/topic/:id'], function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if(id){
      fs.readFile('data/'+id, 'utf8', function(err, data){
        if(err){
          consloe.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view',{topics:files, title:id, description:data})
      })
    } else{
      res.render('view',{topics:files, title:'welcome', description:'hello'});
    }
  })
})

/*
app.get('/topic', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('view',{topics:files});
  })
})
app.get('/topic/:id', function(req, res){
  var id = req.params.id;
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }

    fs.readFile('data/'+id, 'utf8', function(err, data){
      if(err){
        consloe.log(err);
        res.status(500).send('Internal Server Error');
      }
      res.render('view',{topics:files, title:id, description:data})
    })
  })
})*/

app.listen(3000, function(){
  console.log('connected 3000');
});
