var http = require('https')
  , fs = require('fs')

 
var request = http.get("https://zarina.ua/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/-/3-368_320.jpg", function(res){
    var imagedata = ''
    res.setEncoding('binary')
 
    res.on('data', function(chunk){
        imagedata += chunk
    })
 
    res.on('end', function(){
        fs.writeFile('./client/public/img2/products/rings/ring.jpeg', imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
        })
    })
 
})