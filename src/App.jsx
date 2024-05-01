import { useEffect, useState } from 'react'
import './App.css'
import {fetchClients} from './components/fetchClient'
import Card from './components/ClientCard'

function App() {
const [state ,setState]=useState(null)
useEffect(()=>{
  fetchClients().then((client)=>{
    setState(client)
  })
},[])
  return (< >
  {state? <Card {...state }/>:'loading'}</>
   
  )
}

export default App
