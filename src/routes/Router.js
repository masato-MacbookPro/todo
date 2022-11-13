import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/HomeScreen";
import PostsScreen from "../screens/PostScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/posts" element={<PostsScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
