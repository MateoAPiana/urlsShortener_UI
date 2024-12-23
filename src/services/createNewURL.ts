export async function createNewURL({ url }: { url: string }) {
  try {
    return fetch(`${import.meta.env.VITE_URL_API}/url/create`, {
      method: "POST",
      body: JSON.stringify({ url }),
      credentials: 'include',
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
  } catch {
    return new Error("Error to send the data")
  }
}