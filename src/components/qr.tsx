import "./qr.css"
import { useParams } from "react-router-dom"
export function QR() {
  const { url } = useParams()
  return (
    <div className="qr_container">
      <h2>QR para la url: {url}</h2>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=https://${url}&size=100x100`} alt="" />
    </div>
  )
}