/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";


import Main from './components/Main'
import PostForm  from "./components/PostForm";

import './styles/App.css'
import "./styles/PostForm.css";
import "./styles/global.css";
import "./styles/Feed.css";



export default function App() {

  const [posts, setPosts] = useState([]);

    function handleSubmit({history, userName}) {
      setPosts([
        ...posts,
        {
          id: (Math.random() * 50).toFixed(),
          content: history,
          userName,
          publishedAt: new Date(),
        },
      ]);
  }

  return (
    <div className="wrapper">
      <PostForm onSubmit = {handleSubmit}/>
      <main>
        <Main posts={posts}/>
      </main>
    </div>
  );
}