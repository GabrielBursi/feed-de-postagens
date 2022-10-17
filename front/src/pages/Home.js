import { useState, useEffect } from "react";

import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:3001/posts').then(async (r) => {
      const body = await r.json()
      setPosts(body.map(post => ({
        ...post,
        publishedAt: new Date(post.publishedAt)
      })))
      setLoading(false)
    })
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
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}