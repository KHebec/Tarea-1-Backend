const express = require('express') 
const app = express() 
const port = 3000 

//A) Crear una ruta que reciba nombre y apellido por medio de params
// (ruta parametrizada) y devuelva por un res.send un query string 
//armando un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get('/person/:names/:lastname', (req, res) => {
  res.send(`Hello ${names}`+" "+`${lastname}`)
}) //http://localhost:3000/person/karen/carboni


// B)Crear una ruta “dividir” la cual reciba dos parámetros 
// (ruta parametrizada) divisor y dividendo, la misma tiene que devolver 
// un res.json({error: "no se puede dividir por cero"}) si el usuario 
// ingresa un 0, si no es el caso devolver res.json({resultado}).

app.get('/dividir/:divisor/:dividendo', (req, res) => {
    let resultado= req.params.dividendo / req.params.divisor;

  if (req.params.divisor==0) {
    res.json({error: "no se puede dividir por cero"})
  } else {
    res.json({resultado})
  } 
}) //http://localhost:3000/dividir/0/25

// C)Crear una ruta que sume dos valores (ruta parametrizada), pero poner 
// una condición de que no se puedan enviar números menores que cero, y el 
// resultado se debe devolver por medio de un res.json({resultado}).

app.get('/suma/:num1/:num2', (req, res) => {
    let resultado= Number(req.params.num1) + Number(req.params.num2);

  if (req.params.num1 <0 || req.params.num2 <0) {
    res.json({error: "no se pueden enviar numeros menores que cero"})
  } else {
    res.json({resultado})
  } 
}) //http://localhost:3000/suma/-10/19

// D)Crear una ruta que reciba un numero (ruta con query) si el número es 
// impar debe devolver un res.send("no autorizado") , y si el número es 
// par debe devolver res.send("autorizado").
app.get('/number', (req, res) => {
    value= req.query.num;
  if (value%2==1) {
    res.send("no autorizado");
  } else{
    res.send("autorizado");
  } 
}) //http://localhost:3000/number?num=3


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