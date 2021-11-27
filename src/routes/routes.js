const router = require("express").Router()
const axios = require("axios")


router.get('/dolar', async (req, res) => {

    try {
        const { data } = await axios("https://economia.awesomeapi.com.br/last/USD-BRL")

        console.log(data.USDBRL)

        res.json(data)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/euro', async (req, res) => {
    try {
        const { data } = await axios("https://economia.awesomeapi.com.br/last/EUR-BRL")
        
        console.log(data.EURBRL)

        res.json(data)

    } catch (error) {
        res.send(error)
    }

})

router.get('/btc', async (req, res) => {
    try {
        const { data } = await axios("https://economia.awesomeapi.com.br/last/BTC-BRL")
        
        console.log(data.BTCBRL)

        res.json(data)

    } catch (error) {
        res.send(error)
    }

})

module.exports = router