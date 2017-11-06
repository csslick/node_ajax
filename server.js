var nodemailer = require('nodemailer');
var express= require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.listen(3000, function(){
	console.log('Server Run at 3000 port!');
});

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'view');

// post 요청용 미들웨어
app.use(bodyParser.urlencoded({extended: false}));

// JSON 요청용 미들웨어
app.use(bodyParser.json());

// ------------------------------------------------
app.get('/', function(req, res){
	// res.render('index.ejs', { title: 'Simple Server App'});
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', function(req, res){
    console.log(req.body.uname.length); 
    var resData;

    // 유저 입력 값이 있으면
    if(req.body.uname.length > 0){
      resData = {
        uname: req.body.uname + '님의 ',
        uage: '나이는 ' + req.body.uage  + '입니다'
      } 
    }
    res.send(JSON.stringify(resData));
    console.log(resData);

});




