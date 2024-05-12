import React, { useState, useEffect } from 'react';

const currencyData = [ 
    {
        "USD":1,
        "AED":3.67,
        "AFN":73.74,
        "ALL":99.54,
        "AMD":402.82,
        "INR":83.28,
    }  
]

function CurrencyConverter() {
    const [apiData, setData] = useState([]);

    const [AmountValue,setAmountvalue] = useState('')

    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then((response) => response.json())
            .then((data) => {
                setData(data.rates);
            })
            .catch((error) => console.log(error));
    }, [])

    console.log(apiData)


    return (
        <>
            <h1>Currency Converter</h1>

        <div>
            {apiData.USD}
        </div>
           

        </>
    )

}

export default CurrencyConverter