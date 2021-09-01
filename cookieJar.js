let express = require('express');
let cookieParser = require('cookie-parser');

let app = express()
  
app.use(cookieParser());
  
  
//basic route for homepage
app.get('/', (req, res)=>{
res.send('Olá Pessoal, tudo bem?');
});
  
//JSON object to be added to cookie
let users = [{
    name : "Giovana",
    Age : "21"
},
{
    name: "Juliana",
    Age : "23"
}
]
  
//Route for adding cookie
app.get('/setuser', (req, res)=>{
    res.cookie("userData", users);
    res.cookie("userData", users);
    res.send('user data added to cookie');
});
  
//Iterate users data from cookie
app.get('/getuser', (req, res)=>{
    //shows all the cookies
    res.send(req.cookies);
});
  
//server listens to port 3000
app.listen(3000, (err)=>{
    if(err)
    throw err;
    console.log('listening on port 3000');
});