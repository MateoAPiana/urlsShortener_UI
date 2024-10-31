import { FormEvent } from 'react'
import './App.css'

export default function App() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
  }
  return (
    <main>
      <h1>Urls shortener</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="url" name="url" id="url" />
        <input type="submit" value="Send url" />
      </form>
    </main>
  )
}
