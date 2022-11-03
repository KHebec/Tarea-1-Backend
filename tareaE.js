const express = require('express') 
const app = express() 
const port = 3000 

// E)Crear una ruta “lista de compras” (ruta con query) que devuelva un 
// objeto con 5 productos, se debe usar res.json({objeto}).
app.get('/list', (req, res) => {
  res.json({
      cereales:req.query.cer,
      yerba:req.query.yer,
      cerveza:req.query.birra,
      vino:req.query.vino,
      cafe:req.query.cafe
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//res.json lo usamos para enviar objetos