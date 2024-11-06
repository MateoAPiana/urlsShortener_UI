export async function getUser() {
  try {
    const token = await window.cookieStore.get("access_token")
    console.log(token)
    return Boolean(token)
  } catch {
    return false
  }
}