import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FromAddURL } from './components/formAddURL'
import { Home } from './components/home'
import { AllUrls } from './components/allUrls'
import { NavBar } from './components/navbar'
import { QR } from './components/qr'

export default function App() {
  return (
    <>
      <NavBar />
      <main className='App'>
        <h1>Urls shortener</h1>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<FromAddURL />} path='/addURL' />
          <Route element={<AllUrls />} path='/urls' />
          <Route element={<QR />} path='/qr/:url' />
        </Routes>
      </main>
    </>
  )
}
