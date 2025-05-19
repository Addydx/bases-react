import { useState } from 'react';

export const FirstHook = ({ initialValue }) => {
    console.log("renderizando de nuevo")
    
    const [counter, setCounter] = useState(initialValue)

    const mensaje = () => {
        console.log('On click')
        setCounter(counter + 1)
    }

    return (
        <>
            <h6>Valor de mi contador</h6>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={mensaje}>Incrementar</button>
        </>
    );
}
// todos los hooks son funciones