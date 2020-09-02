import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const PaisesContext = createContext();

const PaisesProvider = (props) => {

    const [paises, guardarPaises] = useState([])

    useEffect(() => {

        const getData = async () => {
            const apiUrl = 'https://restcountries.eu/rest/v2/all'

            const resultado = await axios.get(apiUrl)
            guardarPaises(resultado.data)
        }
        getData()
    }, [])

    return (
        <PaisesContext.Provider
            value={{
                paises
            }}
        >
            {props.children}
        </PaisesContext.Provider>
    )
}

export default PaisesProvider;