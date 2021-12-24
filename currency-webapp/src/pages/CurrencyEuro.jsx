import { useState, useEffect } from "react";

const CurrencyEuro = () => {
    const [currencies, setCurrency] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:8080/euro")
        .then(response => response.json())
        .then(data => {
            setCurrency([data])
            
        })
    }, [])
    

    return (
        <>
            <div key={currencies}>
                <h1>Cotações do Euro</h1>
                {
                    currencies.map((currency, pos) => { /* nao sei pq do "pos" ainda não encontrei nada explicando isso mas sei que se trata da renderização dos componentes, preciso entender melhor */
                        return(
                            <div key={pos}> 
                                <h2>{currency.EURBRL.code + "" + currency.EURBRL.codein}</h2>
                                <div>
                                   <h3> Máxima: {currency.EURBRL.high}</h3> <br />
                                   <h3> Mínima: {currency.EURBRL.low}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CurrencyEuro