let express = require('express');
let app = express();
let PORT = 3333 || process.env.PORT;

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/viewerjs/dist/'));
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.listen(PORT, ()=>{
    console.log(`Welcome to port ${PORT}`)
})