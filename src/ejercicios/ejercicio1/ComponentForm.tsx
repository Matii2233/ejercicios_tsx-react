import { useState } from "react"
import "./form.css"


export const ComponentForm = () => {
    const randNumber = Math.round(Math.random()*100-0)
    const [secretNumber, setNumber] = useState(randNumber)
    const [userNumber, setUserNumber] = useState('')
    const [messageAlert, setMessageAlter] = useState('')


    const handleChangeSecretNumber = () => {
        setNumber(Math.round(Math.random()*100-0))
        console.log(`${secretNumber}`)   
    }

    const handleAdivinateNumber = () => {
        if (secretNumber === parseInt(userNumber)){
            console.log('numero adivinado')
            setMessageAlter('numero adivinado')
        } else {
            setMessageAlter('Los numeros no coinciden')
            console.log('Los numeros no coinciden')
        }
    }

    return (
      <div>

        <div className="containerForm">

          <h2>Juego de adivinanza</h2>
          <input onChange={(e)=>setUserNumber(e.target.value)} type="number" value={userNumber}/>

          <div className="containerButton">
            <button onClick={handleChangeSecretNumber}>Nuevo Numero</button>
            <button onClick={handleAdivinateNumber}>Adivinar Numero</button>
          </div>

          <h3>{messageAlert}</h3>

        </div>
      </div>
    )
}
