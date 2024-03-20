import { useLoaderData } from "react-router-dom"
import User from "../User/User";

function Users() {
  const users = useLoaderData();
  return (
    <div className="grid gridcol2 md:grid-cols-4 gap-4">
      {
        users.map((user, index) => <User key={index} user={user}></User>)
      }
    </div>
  )
}

export default Users