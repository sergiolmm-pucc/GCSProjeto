var express = require('express');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  
server.listen(PORT, () => console.log(`Listening on ${PORT}`));


server.get('/',function(req,res){
    res.send("Site de Tecnologia");
});

server.get('/ht',(req, res) => res.sendFile(INDEX, { root: __dirname }));
