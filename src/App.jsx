import { useState } from 'react'
import './App.css'
import PagePrincipal from './components/Page_principal/PagePrincipal'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <PagePrincipal />
      </div>
    </ThemeProvider>
  )
}

export default App
  