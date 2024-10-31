export async function createNewURL({ url }: { url: string }) {
  return fetch(import.meta.env.VITE_URL_API, {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => {
      if (res.ok) return res.json()
      else return new Error("Error to send the data")
    })
    .then((json) => {
      return json
    })
}