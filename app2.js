const express = require('express')
const app = express()

const port = process.env.PORT || 5500 ;
/*
app.get('/', (req, res) => {
  res.send('Haydi Bismillah !')
})
*/
app.get("/", function(req, res){
  res.render("home.ejs");
  })

app.listen(port, () => {
  console.log("Örnek uygulama dinleniyor inşallah." + port);
})
 