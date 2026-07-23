import { useState, useEffect, useEffectEvent } from "react"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import './App.css'

function App() {
  const [ tema, setTema ] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'

    if(salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(preferences-color-scheme: dark)').matches

    if(preferenciaEscuro) return 'dark'

    return 'light'
  })

  function alterarTema() {
    setTema(t => (t === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <>
      <Header tema={tema} alterarTema={alterarTema}/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
