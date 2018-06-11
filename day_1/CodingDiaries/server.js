let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let ejs = require('ejs');
let PORT = 3100 || process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/100daysOfCode', (req, res)=>{
    res.render('100daysOfCode');
})

app.get('/codingStory', (req, res)=>{
    res.render('mystory');
})


app.get('/uci', (req, res)=>{
    res.render('uci')
})


app.listen(PORT, ()=>{
    console.log("you are connected to " + PORT)
})