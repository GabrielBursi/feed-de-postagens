import { useState, useEffect } from "react";
import Feed from "../components/Feed";

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/posts/most-viewed")
      .then(async (r) => {
        
        if(!r.ok){
          setError(true)
          return
        }

        const body = await r.json();
        setPosts(
          body.map((post) => ({
            ...post,
            publishedAt: new Date(post.publishedAt),
          }))
        );
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="most-viewed">
      <Feed
        loading={loading}
        hasError={hasError}
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
