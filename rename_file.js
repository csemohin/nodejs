var fs = require('fs')
fs.rename('openfile.txt', 'openFl.txt', function(err){
  if(err) throw err;
  console.log("rename Success")
})
