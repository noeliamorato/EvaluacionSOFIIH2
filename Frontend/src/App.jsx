
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Medicamentos from './pages/medicamentos'
import Categorias from './pages/categorias'
import Navbar from './pages/navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
          <Route path='/Medicamentos' element={<Medicamentos />} />
          <Route path='/Categorias' element={<Categorias />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
