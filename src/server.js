const express = require("express")

const db = require("./database/db")
const routes = require("./routes/routes")

const app = express()

//conexao com database
db.connect()


//definindo rotas
app.use('/api', routes)

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))