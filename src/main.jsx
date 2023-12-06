import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import './styles/style.css'
import NotFound from './screens/NotFound'
import Musics from './screens/Musics'
import Photos from './screens/Photos'
import Artist from './screens/Artist'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/musics' element={<Musics />} />
        <Route path='/musics/artist/:name' element={<Artist />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
