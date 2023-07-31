import { useState } from "react"
import Button from "./components/button"

function App() { 
   const[buttonColor, setButtonColor] = useState('pink')
   const[buttonSize, setButtonSize] = useState('sm')
  return (
    <>
    <Button handleClick={() => {setButtonColor('pink')}} size='sm' color='pink' title='Botão rosa' />
    <Button handleClick={() => {setButtonColor('orange')}} size='md' color='orange' title='Botão laranja' />
    <Button handleClick={() => {setButtonSize('sm')}} size='sm' color='orange' title='Botão pequeno' />
    <Button handleClick={() => {setButtonSize('md')}} size='md' color='orange' title='Botão médio' />
    <Button size={buttonSize} color={buttonColor} title="Botão personalizado" />
    </>
  )
}

export default App

