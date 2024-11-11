import { useNavigate } from "react-router-dom"
import { createNewURL } from "../services/createNewURL"
import "./formAddURL.css"
import { FormEvent, useState } from 'react'

export function FromAddURL() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    try {
      await createNewURL({ url: info.url.toString() })
      navigate("/urls")
    } catch (error) {
      if (typeof error === "string") setError(error)
    }
  }
  return (
    <div className="addURL_container">
      <img src="/imageAddURL.jpg" alt="" />
      <form className='fromAddURL' action="" onSubmit={handleSubmit}>
        <div className="error">{error}</div>
        <label htmlFor="url">Insert this the url</label>
        <input type="url" name="url" id="url" placeholder="https://youtube.com" required />
        <input className="addURLSubmit" type="submit" value="Send url" />
      </form>
    </div>
  )
}