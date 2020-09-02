import React, {useContext} from 'react';
import {PaisesContext} from '../Context/PaisesContext'


const Paises = () => {

    const {paises} = useContext(PaisesContext)

    return ( 
        <>
        <h2>Paises</h2>
       
        {paises.map(pais => (
            <p key={pais.alpha2Code}>{pais.name}</p>
        ))}
        </>
     );
}
 
export default Paises;