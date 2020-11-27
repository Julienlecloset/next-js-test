import Link from 'next/link'
import homePic from "../public/home.jpg";
import Button from "../components/Shared/Button";


const Home = () => {
  return (
    <div className="w-100 d-flex f-col jc-center ai-center">
      <img src={homePic} alt="des chats" className="w-25" />
      <Link href="/users">
        <a className="text-danger">Users</a>
      </Link>
      <div className="mt-6">
        <Button onClick={() => console.log("hello")}>console says "hello"</Button>
      </div>
    </div>
  )
}

export default Home;
