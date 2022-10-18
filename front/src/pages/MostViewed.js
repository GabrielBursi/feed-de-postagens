import { useState, useEffect } from "react";
import Feed from "../components/Feed";
import { getMostViewedPosts } from "../services/postServices";

export default function MostViewed() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);


  useEffect(() => {
    
    async function loadPosts() {

      try {
        const postsList = await getMostViewedPosts();

        if (!postsList.ok) {
          setError(true);
          return;
        }

        setPosts(postsList);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
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
