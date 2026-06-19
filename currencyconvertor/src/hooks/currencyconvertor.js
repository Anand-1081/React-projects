import { useEffect , useState } from "react";

function useCurrencyconvertor(currency) {
    const [data ,  setData] = useState({})
    useEffect(() => {

        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )

    }, [currency])
    return data
}

export default useCurrencyconvertor;
   
