var express = require('express');
var server = express();
var port = process.env.PORT || 8000;








server.listen(port,function(){

  console.log('Server is running at '+ port);

});
