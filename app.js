var express = require('express');
var app = express();
var compression = require('compression');
var mysql = require('mysql');
var path = require('path');

app.use(compression());
app.set('port', (process.env.PORT || 5500));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, '/public')));

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');



function baglan() {
    con = mysql.createConnection({

        host: ENV['89.163.146.147'],
        // host: "89.163.146.147",

        user: "yilsoft_kutup",

        password: ENV['of.616161'],
        // password: "of.616161",   

        database: ENV['yilsoft_kutup'],
        //database: "yilsoft_kutup",  

    });
} // bağlantı END


app.get("/", function (req, res) {

    baglan();
    var sql = 'SELECT * FROM ogrenciler WHERE ogrencilerid < 20';

    con.query(sql, function (err, results) {
        console.log(results);
        res.render('home', { bilgim: results });


        res.render("home");
    })
})


/*
app.get('/', (req, res) => {
    res.send('Haydi Bismillah !')
})

 app.listen(port, () => {
   console.log("Örnek uygulama dinleniyor inşallah." + port);
 })*/

 app.listen(app.get('port'), function() {
    console.log('Elhamdülillah', app.get('port'));
});