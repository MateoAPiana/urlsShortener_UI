import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FromAddURL } from './components/formAddURL'
import { Home } from './components/home'
import { AllUrls } from './components/allUrls'
import { NavBar } from './components/navbar'
import { QR } from './components/qr'
import { FormLogin } from './components/formLogin'
import { FormRegister } from './components/formRegister'
import { useEffect } from 'react'
import { useUserStore } from './store/urls'
import { getUser } from './services/getUser'

export default function App() {
  const setUser = useUserStore(e => e.setUser)
  useEffect(() => {
    const getData = async () => {
      const initialUserValue = await getUser()
      setUser(initialUserValue)
    }
    getData()
  }, [])
  return (
    <>
      <main className='App'>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<FromAddURL />} path='/addURL' />
          <Route element={<AllUrls />} path='/urls' />
          <Route element={<QR />} path='/qr/:url' />
          <Route element={<FormLogin />} path='/login' />
          <Route element={<FormRegister />} path='/register' />
        </Routes>
      </main>
    </>
  )
}
