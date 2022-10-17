import { useState, useEffect } from "react";
import Feed from "../components/Feed";

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/posts/most-viewed").then(async (r) => {
      const body = await r.json();
      setPosts(
        body.map((post) => ({
          ...post,
          publishedAt: new Date(post.publishedAt),
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <main className="most-viewed">
      <Feed
        loading={loading}
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
