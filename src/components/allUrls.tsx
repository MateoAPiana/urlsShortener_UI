import { useEffect, useState } from "react"
import { urlsListItem } from "../../types"
import { getURLs } from "../services/getURLs"
import "./allUrls.css"
import { QRIcon } from "./QRIcon"
import { Link } from "react-router-dom"

export function AllUrls() {
  const [urlsList, setUrlsList] = useState<urlsListItem[]>([])
  const [error, setError] = useState("")
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getURLs()
        setUrlsList(data)
      } catch (error) {
        if (typeof error === "string") setError(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="urlsTables">
      <div className="error">{error}</div>
      <div className="headerTable">
        <p className="itemTable">Original URL</p>
        <p className="itemTable">URL shorted</p>
      </div>
      {
        urlsList.map((i, index) => {
          let url: string
          if (i.url_original.startsWith("https")) url = i.url_original.slice(8)
          else url = i.url_original.slice(7)
          console.log(url)
          return (
            <div className="rowURL" key={index}>
              <Link to={`/qr/${url}`} className="QRButton">
                <QRIcon />
              </Link>
              <p className="itemTable">{i.url_original}</p>
              <a target="_blank" href={`${import.meta.env.VITE_URL_API}/redirect/${i.url_shorted}`} className="itemTable linkTable">{import.meta.env.VITE_URL_API}/redirect/{i.url_shorted}</a>
            </div>
          )
        })
      }
    </div>
  )
}