import Link from 'next/link'
import axios from "axios";

const Users = ({ users }) => {

  const displayUsers = () => {
    return users.map( (user, index) => (
      <Link 
        key={index} 
        href="/users/[id]"
        as={`/users/${user.id}`}
      >
        <a>
          <img src={user.avatar} style={{ width: "100px"}} />
          <p>{user.first_name}</p>
        </a>
      </Link>
    ))
  }

  return (
    <div className="d-flex f-col jc-center">
      <h1>users page</h1>
      {displayUsers()}
    </div>
  )
}

Users.getInitialProps = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    const users = res.data.data;
    return {
      users: users
    }
  } catch(err) {
    console.log("woups, there was an error, do something about it but don't redirect me");
  }
}

export default Users;