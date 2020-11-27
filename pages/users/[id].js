import axios from "axios";

const User = ({ user }) => {
  return (
    <div>
      <h1>user show</h1>
      <img src={user.avatar} style={{ width: "100px"}} />
      <p>{user.first_name} {user.last_name}</p>
      <p>{user.email}</p>
    </div>
  )
}

User.getInitialProps = async ({ query }) => {
  try {
    console.log(query, query.id);
    const res = await axios.get(`https://reqres.in/api/users/${query.id}`);
    const user = res.data.data;
    return {
      user: user
    }
  } catch(err) {
    console.log("woups, there was an error, do something about it but don't redirect me");
  }
}

export default User;