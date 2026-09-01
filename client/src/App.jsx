import { useEffect, useState } from "react"

function App() {

  const [message,setMessage]= useState('')

async function fetchAPI() {
  const response = await fetch('http://localhost:3067')
  const data = await response.json()
  setMessage(data.message)
}
useEffect(()=> {
 fetchAPI()
},[])

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App