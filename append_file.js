var fs = require('fs')
fs.appendFile('mynewfile1.txt', 'Append File 2', function(err){
  if(err) throw err
  console.log('Saved!')
})