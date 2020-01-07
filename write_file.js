var fs = require('fs')

fs.writeFile('writefile.txt', 'write file', function(err){
  if(err) throw err;
  console.log('Saved writefile 2')
})