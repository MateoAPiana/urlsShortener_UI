import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/urls"

export async function Logout() {
  await window.cookieStore.delete("access_token")
  const navigate = useNavigate()
  const setUser = useUserStore(e => e.setUser)
  setUser(false)
  navigate("/")
  return (<></>)
}