import { NavLink, useNavigate } from "react-router-dom"
import "./navBar.css"
import { useUserStore } from "../store/urls"

export function NavBar() {
  const user = useUserStore(e => e.user)
  const navigate = useNavigate()
  const setUser = useUserStore(e => e.setUser)
  const logout = async () => {
    await window.cookieStore.delete("access_token")
    setUser(false)
    navigate("/")
  }

  return (
    <nav className="navBar">
      <NavLink className="navbarItem" to="/">Home</NavLink>
      {
        user &&
        <>
          <NavLink className="navbarItem" to="/urls">All yours URLs</NavLink>
          <NavLink className="navbarItem" to="/addURL">Create a new URL shorted</NavLink>
          <button className="navbarItem" onClick={logout}>Logout</button>
        </>
      }
      {
        !user &&
        <>
          <NavLink className="navbarItem" to="/login">Login</NavLink>
          <NavLink className="navbarItem" to="/register">Register</NavLink>
        </>
      }
    </nav>
  )
}