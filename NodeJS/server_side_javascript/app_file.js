var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var multer = require('multer');  // file upload
var app = express();

var _storage = multer.diskStorage({
  destination: function(req, file, cb){
    //if를 통해 파일 형식에 따라 다른폴더에 ..
    cb(null, 'uploads/')

  },
  filename: function(req, file, cb){
    //파일 존재 여부에 따라 파일 명 변경..
    cb(null, file.originalname)
  }
})
var upload = multer({storage:_storage});

app.set('views', './views_file'); //jade file path
app.set('view engine', 'jade'); //use jade
app.locals.pretty = true;

app.use(bodyParser.urlencoded({extended: false}))

app.get('/upload', function(req, res){
  res.render('upload');
})
app.post('/upload', upload.single('userfile'), function(req, res){
  console.log(req.file);
  res.send('uploaded'+req.file.filename);
})
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
