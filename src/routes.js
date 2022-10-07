import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Exercicio1 from './pages/exercicio1'
import Exercicio2 from './pages/exercicio2'
import Exercicio3 from './pages/exercicio3'

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/exercicio1' element={ <Exercicio1 />} />
                <Route path='/exercicio2' element={ <Exercicio2 />} />
                <Route path='/exercicio3' element={<Exercicio3 />} />
            </Routes>
        </BrowserRouter>
    )
}