var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('notelist', ['notelist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/notelist', function (req, res) {
  db.notelist.find(function (err, docs) {
    console.log('A facut get all', docs);
    res.json(docs);
  });
});

app.post('/notelist', function (req, res) {
    req.body.dateAdded = Date.now();
    db.notelist.insert(req.body, function(err, doc) {
    console.log('A facut post', req.body);
    res.json(doc);
  });
});

app.delete('/notelist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.notelist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/note/:id', function (req, res) {
  var id = req.params.id;
   db.notelist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
     console.log('A facut get ID', doc);
    res.json(doc);
  });
});

app.put('/notelist/:id', function (req, res) {
  var id = req.params.id;
  var body = {
    title: req.body.title, 
    text: req.body.text, 
    autor: req.body.autor, 
    dateAdded: req.body.dateAdded
  };
  console.log('A facut put', body);
  db.notelist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    
    update: {$set: body},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");