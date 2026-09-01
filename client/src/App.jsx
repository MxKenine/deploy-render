import { useEffect, useState } from "react"

function App() {

  const [message,setMessage]= useState('')

  async function fetchAPI() {
    const response = await fetch(import.meta.env.VITE_BACK_URL)
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