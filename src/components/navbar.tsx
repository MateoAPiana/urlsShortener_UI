import { NavLink } from "react-router-dom"
import "./navBar.css"

export function NavBar() {
  return (
    <nav className="navBar">
      <NavLink className="navbarItem" to="/">Home</NavLink>
      <NavLink className="navbarItem" to="/urls">All yours URLs</NavLink>
      <NavLink className="navbarItem" to="/addURL">Create a new URL shorted</NavLink>
    </nav>
  )
}