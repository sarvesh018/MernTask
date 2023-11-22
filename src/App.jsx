import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WordCount from './components/WordCount'
import AgeCalculator from './components/AgeCalculator'
import Calculator from './components/Calculator'
import ColorPicker from './components/ColorPicker'
import ContentTable from './components/ContentTable'
import Porfolio from './components/Porfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='wordcount' element={<WordCount/>}/>
          <Route path='agecalculator' element={<AgeCalculator/>}/>
          <Route path='calculator' element={<Calculator/>}/>
          <Route path='colorpicker' element={<ColorPicker/>}/>
          <Route path='contenttable' element={<ContentTable/>}/>
          <Route path='portfolio' element={<Porfolio/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
