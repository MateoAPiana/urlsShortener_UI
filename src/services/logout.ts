export async function logout() {
  await window.cookieStore.delete("access_token")
}