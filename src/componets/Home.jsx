import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>やることを忘れないようにメモしよう</h1>
      <Link to="/posts">やること一覧</Link>
    </div>
  )
}

export default Home;
