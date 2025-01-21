import { urlsListItem } from "../../types"

export async function getURLs() {
  console.log(await window.cookieStore.get("access_token"))
  try {
    return fetch(`${import.meta.env.VITE_URL_API}/url/read`, {
      method: "POST",
      body: JSON.stringify({
        cookie: await window.cookieStore.get("access_token")
      }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (res.ok) return res.json()
        else return "Error to get the data"
      })
      .then(({ urls }: { urls: urlsListItem[] }) => {
        return urls
      })
  } catch {
    return "Error to send the data"
  }
}