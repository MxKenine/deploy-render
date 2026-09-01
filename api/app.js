const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({origin:"http://localhost:5173"}))

app.get('/', (req, res)=> {
    res.json({message:"Bienvenue chez Express JS"})
})

app.listen(3067, ()=>console.log("Le serveur tourne sur le port 3000"))