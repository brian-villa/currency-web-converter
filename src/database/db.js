const mongoose = require("mongoose")

function connect() {
    mongoose.connect("mongodb://localhost:27017/currency-web?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false") // estabelecendo conexao com banco de dados

    const db = mongoose.connection

    db.once('open', () => {
        console.log("Connected to database!")
    })

    db.on('error', console.error.bind(console, "connection error: "))

}

module.exports = {
    connect,
}