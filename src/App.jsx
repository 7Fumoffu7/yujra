import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componentes from './Componentes'
import { Route, Routes } from 'react-router-dom'
import Comp from './Comp'

function App() {
  return (
    <>
    <h1>Banco economico Patito</h1>
              <div className='menu'>
                <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/Comp">Componentes 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Componentes">Componentes 2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
          <Routes>
            <Route path="/Componentes" element = {<Componentes></Componentes>} />
            <Route path='/Comp' element ={<Comp></Comp>} />
          </Routes>
      <footer className='abajo'>
        <p>© 2025 Yujra Escobar Josue Israel. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App;
