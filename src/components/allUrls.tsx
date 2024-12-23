import { useEffect, useState } from "react"
import { urlsListItem } from "../../types.d"
import { getURLs } from "../services/getURLs"
import "./allUrls.css"
import { QRIcon } from "./QRIcon"
import { Link, useNavigate } from "react-router-dom"
import { DeleteIcon } from "./deleteIcon"
import { deleteURL } from "../services/deleteURL"

export function AllUrls() {
  const [urlsList, setUrlsList] = useState<urlsListItem[]>([])
  const [error, setError] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getURLs()
        if (!data) return navigate("/")
        if (typeof data === "string") return setError(error)
        setUrlsList(data)
      } catch (error) {
        if (typeof error === "string") setError(error)
      }
    }
    getData()
  }, [])

  const handleDelete = async (url: string) => {
    try {
      const dbRes = await deleteURL(url)
      if (dbRes.error) setError(dbRes.error)
      else setUrlsList(urlsList.filter(u => !u.url_shorted.endsWith(url)))
    } catch {
      setError("Error deleting the URL, try again later")
    }
  }

  return (
    <div className="urlsTables">
      <div className="error">{error}</div>
      <div className="headerTable">
        <p className="itemTable">Original URL</p>
        <p className="itemTable">URL shorted</p>
      </div>
      {
        urlsList[0]
          ? urlsList.map((i, index) => {
            const urlRedirect = import.meta.env.VITE_URL_API + "/" + i.url_shorted
            const url = encodeURIComponent(urlRedirect.startsWith("https")
              ? urlRedirect.slice(8)
              : urlRedirect.slice(7)
            )
            return (
              <div className="rowURL" key={index}>
                <Link to={`/qr/${url}`} className="QRButton">
                  <QRIcon />
                </Link>
                <button className="QRButton deleteButton" onClick={() => {
                  handleDelete(i.url_shorted)
                }}>
                  <DeleteIcon color={index % 2 === 0 ? "#DEDFDC" : "#3B5562"} />
                </button>
                <p className="itemTable">{i.url_original}</p>
                <a rel="noreferrer" target="_blank" href={urlRedirect} className="itemTable linkTable">
                  {urlRedirect}
                </a>
              </div>
            )
          })
          : <h2 style={{ textAlign: "center" }}>Not found URLs</h2>
      }
    </div>
  )
}