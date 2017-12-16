var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var artical = {
  'artical-one':{
      title:'Articat | one',
      hedding:'My artical one',
      content:`
    <p>         This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>    This is the first artical useing the node js. This is the first artical useing the node js.
            This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
          This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>     This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
      </p>`
  },
  'artical-two':{
      title:'Articat | two',
      hedding:'My artical two',
      content:`<p>         This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>    This is the first artical useing the node js. This is the first artical useing the node js.
            This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
          This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>     This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
      </p>`
  },
  'artical-three':{
      title:'Articat | threee',
      hedding:'My artical three',
      content:`<p>         This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>    This is the first artical useing the node js. This is the first artical useing the node js.
            This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
          This is the first artical useing the node js. This is the first artical useing the node js.
    </p>
    <p>     This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js. This is the first artical useing the node js.
              This is the first artical useing the node js. This is the first artical useing the node js.
      </p>`
  }
};
function contentHtml(data){
    var title = data.title;
    var hedding = data.hedding;
    var content = data.content;
    var htmlTemplet = `
            <html>
            <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="ui/style.css" >
            </head>
            <body classs="my-body">
            <a href="ui/index.html"> Home</a>
            <h1>${hedding}</h1>
            <hr><br>
            <div class= "metiral">
            ${content}
            </div>
            </body>
            </html>
            
            `;
            return htmlTemplet;
}

app.get('/:articalName', function(req, res){
    var articalName = req.params.articalName;
    res.send(contentHtml(artical[articalName]));
});
app.get('/ui/password', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'password.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


/* Do not change port, otherwise your app won't run on IMAD servers
 Use 8080 only for local development if you already have apache running on 80
*/
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
