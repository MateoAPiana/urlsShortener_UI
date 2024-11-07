export function deleteURL(url: string) {
  return fetch(`${import.meta.env.VITE_URL_API}/${url}`, {
    method: "DELETE",
    credentials: "include"
  })
    .then(res => {
      if (res.ok) return res.json()
      else return { error: "Error deleting the URL, try again later" }
    })
    .then(json => {
      return json
    })
}