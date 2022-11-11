import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../componets/Home"
import Posts from "../componets/Posts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
