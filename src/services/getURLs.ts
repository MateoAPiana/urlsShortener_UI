import { urlsListItem } from "../../types"

export async function getURLs() {
  try {
    const token = await window.cookieStore.get("access_token")
    return fetch(`${import.meta.env.VITE_URL_API}/url/read`, {
      method: "POST",
      body: JSON.stringify({ token: token?.value }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (res.ok) return res.json()
        else return new Error("Error to get the data")
      })
      .then(({ urls }: { urls: urlsListItem[] }) => {
        return urls
      })
  } catch {
    return new Error("Error to send the data")
  }
}