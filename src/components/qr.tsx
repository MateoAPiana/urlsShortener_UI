import "./qr.css"
import { useParams } from "react-router-dom"
export function QR() {
  const { url } = useParams()
  const urlParams = decodeURIComponent(url || "")
  return (
    <div className="qr_container">
      <h2>QR para la url: {urlParams}</h2>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=https://${urlParams}&size=250x250`} alt="" />
    </div>
  )
}