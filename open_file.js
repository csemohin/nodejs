var fs = require('fs')
fs.open('openfile.txt', 'w', function(err, file){
  if(Err) throw err;
  console.log('Saved Open File')
})