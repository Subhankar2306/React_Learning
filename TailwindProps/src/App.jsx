import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-200 text-black p-5 rounded-xl'>Learning how props work</h1>
      <Card userName="Avik" degignation="Employee of Sunrise " bodyPart="He is a honest person , he work with us verry sincerely. "/>
      <Card userName="Baisakhi" degignation= "Employee of Uaguria" bodyPart="She is a good girl, she is a Wordpess Developer at Uaguria. "/>
    </>
  )
}

export default App
