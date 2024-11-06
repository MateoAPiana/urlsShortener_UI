export async function register({ userName, password }: { userName: string, password: string }) {
  return fetch(`${import.meta.env.VITE_URL_API}/user`, {
    method: "POST",
    body: JSON.stringify({ userName, password }),
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
}