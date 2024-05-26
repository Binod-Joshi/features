import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCodeGenerator from './components/QrCodeGenerator'
import Quiz from './components/quiz/Quiz'

function App() {

  return (
    <>
      {/* <QrCodeGenerator/> */}
      <Quiz/>
    </>
  )
}

export default App
