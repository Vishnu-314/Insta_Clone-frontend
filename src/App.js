import { AddNewPost } from "./AddNewPost"
// import { ViewPosts } from "./ViewPosts"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ShowPosts } from "./ShowPosts";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'

const Homepage=()=>{
  return(
    <div>
      <button type="button" class="btn btn-warning"><Link to="post">"Click for New Post"</Link></button>
      <button type="button" class="btn btn-warning"><Link to="view">"Click to See All The Posts"</Link></button>
      
    </div>
  )
}

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