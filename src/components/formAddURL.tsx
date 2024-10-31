import "./fromAddURL.css"
import { FormEvent } from 'react'

export function FromAddURL() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.currentTarget)
    )
  }
  return (
    <form className='fromAddURL' action="" onSubmit={handleSubmit}>
      <label htmlFor="url">Insert this the url</label>
      <input type="url" name="url" id="url" placeholder="https://youtube.com" required />
      <input className="addURLSubmit" type="submit" value="Send url" />
    </form>
  )
}