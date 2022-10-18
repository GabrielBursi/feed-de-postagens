import { useState, useEffect } from "react";

import Feed from '../components/Feed';
import PostForm from '../components/PostForm';
import { getPosts } from "../services/postServices";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(()=>{
    async function loadPosts(){

      try{

        const postsList = await getPosts()

        if (!postsList.ok) {
          setError(true);
          return;
        }

        setPosts(postsList)
        
      }catch(error){

        setError(true)
        console.log(error.message)

      }finally{
        setLoading(false)
      }
      
    }
    loadPosts()
  }, [])

  function handleSubmit({ history, userName }) {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);
  }

  return (
    <>
      <PostForm onSubmit={handleSubmit} />
      
      <main>
        <Feed
          loading={loading}
          hasError = {hasError}
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}