import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FromAddURL } from './components/formAddURL'
import { Home } from './components/home'
import { AllUrls } from './components/allUrls'

export default function App() {
  return (
    <main className='App'>
      <h1>Urls shortener</h1>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<FromAddURL />} path='/addURL' />
        <Route element={<AllUrls />} path='/urls' />
      </Routes>

    </main>
  )
}
