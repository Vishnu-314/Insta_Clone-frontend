import { AddNewPost } from "./AddNewPost"
// import { ViewPosts } from "./ViewPosts"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ShowPosts } from "./ShowPosts";
import Navbar from "./Navbar";
import Homepage from "./Homepage";


export const App = () => {
  return (
    
    <BrowserRouter>
            <Navbar/>
      <Routes >
      <Route path="/" element={<Homepage />}/>
        <Route path="/post" element={<AddNewPost />}/>
        <Route path="/view" element={<ShowPosts/>}/>
      </Routes>
    </BrowserRouter>
  );
}