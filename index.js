require('babel/register')({ extensions: ['.js'] })
require('./server/debug')

var server = require('./server')
var port = process.env.PORT || 3000

server.listen(port, function(){
  console.log(' · ' + port + ' · ')
})
