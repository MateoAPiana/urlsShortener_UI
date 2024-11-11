import { FormEvent, useState } from "react"
import "./formLogin.css"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/urls"

export function FormRegister() {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const setUser = useUserStore(e => e.setUser)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (info.password.toString() !== info.confirmPassword.toString()) return
    try {
      await login({ userName: info.userName.toString(), password: info.password.toString() })
      setUser(true)
      navigate("/")
    } catch (error) {
      if (typeof error === "string") setError(error)
    }
  }
  return (
    <div className="register_container">
      <img src="/imageRegister.png" alt="" />
      <form className='fromLogin' action="" onSubmit={handleSubmit} >
        {error}
        <label htmlFor="userName">Your username</label>
        <input className="inputFormLogin" type="userName" name="userName" id="userName" placeholder="JohnDoe" required />
        <label htmlFor="password">Your password</label>
        <input className="inputFormLogin" type="password" name="password" id="password" placeholder="mySecretPassword123" required />
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input className="inputFormLogin" type="password" name="confirmPassword" id="confirmPassword" placeholder="mySecretPassword123" required />
        <input className="addURLSubmit" type="submit" value="Register" />
      </form>
    </div>
  )
}