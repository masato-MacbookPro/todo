import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posts from "../componets/Posts";
import HomeScreen from "../screens/HomeScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
