const express = require("express")
const cors = require("cors")

const db = require("./database/db")
const routes = require("./routes/routes")

const app = express()

//conexao com database
db.connect()

//HABILITAR CORS
const allowedOrigins = [
    "http://localhost:8080",
    "http://localhost:3000",
]
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true
        
        //mobile app
        if(!origin) {
            allowed = true
        }

        if(!allowedOrigins.includes(origin)) {
            allowed = false

        } 
        callback(null, allowed)
    }
}))

//definindo rota da api
app.use("/", routes)
    
//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))