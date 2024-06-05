import { Routes, Route } from 'react-router-dom'
import './css/variables.css'
import Form from './views/Form/Form'
import Home from './views/Home/Home'
import Inventory from './views/Inventario/Inventory'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/inventario" element={<Inventory />}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
    </>
  )
}

export default App
