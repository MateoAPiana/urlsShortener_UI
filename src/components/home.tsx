import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/addURL">Add new URL shorted</Link>
      <Link to="/urls">View all your URLs</Link>
    </div>
  )
}