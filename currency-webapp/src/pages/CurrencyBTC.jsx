import { useState, useEffect } from "react";

const CurrencyBTC = () => {
    const [currencies, setCurrency] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:8080/btc")
        .then(response => response.json())
        .then(data => {
            setCurrency([data])
            
        })
    }, [])
    

    return (
        <>
            <div key={currencies}>
                <h1>Cotação BitCoin</h1>
                {
                    currencies.map((currency, pos) => { /* nao sei pq do "pos" ainda não encontrei nada explicando isso mas sei que se trata da renderização dos componentes, preciso entender melhor */
                        return(
                            <div key={pos}> 
                                <h2>{currency.BTCBRL.code + "" + currency.BTCBRL.codein}</h2>
                                <div>
                                   <h3> Máxima: {currency.BTCBRL.high}</h3> <br />
                                   <h3> Mínima: {currency.BTCBRL.low}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CurrencyBTC