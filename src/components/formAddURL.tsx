import { createNewURL } from "../services/createNewURL"
import "./fromAddURL.css"
import { FormEvent, useState } from 'react'

export function FromAddURL() {
  const [data, setData] = useState({ url: "", urlShorted: "" })
  const [error, setError] = useState("")
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    try {
      const apiRes = await createNewURL({ url: info.url.toString() })
      setData({ url: info.url.toString(), urlShorted: apiRes.newURL })
    } catch (error) {
      if (typeof error === "string") setError(error)
    }
  }
  return (
    <form className='fromAddURL' action="" onSubmit={handleSubmit}>
      <div className="error">{error}</div>
      <label htmlFor="url">Insert this the url</label>
      <input type="url" name="url" id="url" placeholder="https://youtube.com" required />
      <input className="addURLSubmit" type="submit" value="Send url" />
      {data.urlShorted && <p>{data.url}<br />{data.urlShorted}</p>}
    </form>
  )
}