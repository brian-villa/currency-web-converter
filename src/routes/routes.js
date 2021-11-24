const router = require("express").Router()
const axios = require("axios")


router.get('/', async (req, res) => {

    try {
        const { data } = await axios("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")

        res.json(data)
        
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router