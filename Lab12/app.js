let express = require ('express');
let app = express ();

let path = require('path');

app.use(express.static('html'));

app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname,"/html/root.html"));

  });
    
  app.get("/users",(req,res) => {
    res.sendFile(path.join(__dirname,"/html/user.html"))
})

app.post("/users",(req,res) => {
    res.sendFile(path.join(__dirname,"/html/user.html"))
})


app.get("/products",(req,res) =>{
    res.sendFile(path.join(__dirname,"/html/product.html"))
})

app.post("/products",(req,res) =>{
    res.sendFile(path.join(__dirname,"/html/product.html"))
})

app.get("/css", (req, res)=> {
    res.sendFile(path.join(__dirname, "/html/lab12.css"));
  });

app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, "/html/404page.html"));
  });
  
  app.use((err, req, res, next) => {
       console.error(err);
       res.status(500).send({
      error: {message: err.message  },
    });
  });

app.listen(4000,() => {
    console.log ('server on 4000')
  });