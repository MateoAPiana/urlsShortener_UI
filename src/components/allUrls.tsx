import { useEffect, useState } from "react"
import { urlsListItem } from "../../types"
import { getURLs } from "../services/getURLs"
import "./allUrls.css"

export function AllUrls() {
  const [urlsList, setUrlsList] = useState<urlsListItem[]>([])
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getURLs()
        setUrlsList(data)
      } catch (error) {

      }
    }
    getData()
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>URL shorted</th>
          </tr>
        </thead>
        <tbody>
          {
            urlsList.map((i, index) => {
              return (
                <tr className="rowURL" key={index}>
                  <td>{i.url_original}</td>
                  <td>{i.url_shorted}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}