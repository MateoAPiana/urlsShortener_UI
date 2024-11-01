import { useEffect, useState } from "react"
import { urlsListItem } from "../../types"
import { getURLs } from "../services/getURLs"
import "./allUrls.css"

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
          return (
            <div className="rowURL" key={index}>
              <p className="itemTable">{i.url_original}</p>
              <a target="_blank" href={`${import.meta.env.VITE_URL_API}/redirect/${i.url_shorted}`} className="itemTable linkTable">{import.meta.env.VITE_URL_API}/redirect/{i.url_shorted}</a>
            </div>
          )
        })
      }
    </div>
  )
}