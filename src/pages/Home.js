import React, {useState} from 'react'

import Main from "../components/Main";
import PostForm from "../components/PostForm";

export default function Home(){
    
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
    return(
        <>
            <PostForm onSubmit = {handleSubmit}/>
            <main>
                <Main posts={posts} title='Seu Feed' subtitle='Acompanhe o que seus amigos estão pensando em tempo real'/>
            </main>
        </>
    )
}