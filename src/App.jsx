import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Curiosities from './components/curiosities/Curiosities'
import Start from './components/Start'
import Sites from './components/sites/Sites'
import Test from './components/test/Test'
import Nasa from './components/nasa/Nasa'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='curiosities' element={<Curiosities/>}/>
      <Route path='sites' element={<Sites/>}/>
      <Route path='test' element={<Test/>} />
      <Route path='nasa' element={<Nasa/>} />
    </Routes>
    </>
  )
}

export default App
