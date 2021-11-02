const argv = process.argv.slice(2)
const fs = require('fs')
const request = require('request')


request(argv[0], (err, res, body) => {
  
    fs.writeFile(argv[1], body, err => {
      if(err){
        console.log(err)
      }
    })
    console.log(`Downloaded and saved ${res.headers['content-length']} bytes to ${argv[1]}`)
  })


