import { FormEvent, useState } from "react"
import "./formLogin.css"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/urls"

export function FormLogin() {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const setUser = useUserStore(e => e.setUser)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    try {
      await login({ userName: info.userName.toString(), password: info.password.toString() })
      setUser(true)
      navigate("/")
    } catch (error) {
      if (typeof error === "string") setError(error)
    }
  }
  return (
    <div className="login_container">
      <img src="/imageLogin.png" alt="" />
      <form className='fromLogin' action="" onSubmit={handleSubmit} >
        {error}
        <label htmlFor="userName">Your username</label>
        <input className="inputFormLogin" type="userName" name="userName" id="userName" placeholder="JohnDoe" required />
        <label htmlFor="password">Your password</label>
        <input className="inputFormLogin" type="password" name="password" id="password" placeholder="mySecretPassword123" required />
        <input className="addURLSubmit" type="submit" value="Login" />
      </form>
    </div>
  )
}