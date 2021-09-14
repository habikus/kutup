const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app = express()
var mysql = require('mysql');
var path = require('path');

const port = process.env.PORT || 5500 ;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', './views');

//app.use(expressLayouts);
// connect to database
function baglan() {
  con = mysql.createConnection({
      
      host: "89.163.146.147",
      user: "yilsoft_kutup", 
      password: "of.616161",       
      database: "yilsoft_kutup",  
      });
} // bağlantı END
/*
app.get('/', (req, res) => {
  res.send('Haydi Bismillah !')
})
*/
app.get("/", function(req, res){
  res.render("home");
  })


  app.get('/selam', function (req, res) {
    baglan();  
    var sql = 'SELECT * FROM ogrenciler WHERE ogrencilerid < 15';   

    con.query(sql, function (err, results) { 
      console.log(results);
        res.render('home',{bilgim:results});   
    });

});
 

app.listen(port, () => {
  console.log("Örnek uygulama dinleniyor inşallah." + port);
})
 