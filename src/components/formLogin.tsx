import { FormEvent, useState } from "react"
import "./formLogin.css"
import { login } from "../services/login"
export function FormLogin() {
  const [error, setError] = useState("")
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (info.password.toString() !== info.confirmPassword.toString()) return
    try {
      const apiRes = await login({ userName: info.userName.toString(), password: info.password.toString() })
      console.log(apiRes)
    } catch (error) {
      if (typeof error === "string") setError(error)
    }
  }
  return (
    <form className='fromLogin' action="" onSubmit={handleSubmit} >
      {error}
      <label htmlFor="userName">Your username</label>
      <input className="inputFormLogin" type="userName" name="userName" id="userName" placeholder="JohnDoe" required />
      <label htmlFor="password">Your password</label>
      <input className="inputFormLogin" type="password" name="password" id="password" placeholder="mySecretPassword123" required />
      <label htmlFor="confirmPassword">Confirm your password</label>
      <input className="inputFormLogin" type="password" name="confirmPassword" id="confirmPassword" placeholder="mySecretPassword123" required />
      <input className="addURLSubmit" type="submit" value="Login" />
    </form>
  )
}