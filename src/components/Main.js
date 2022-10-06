/* eslint-disable array-callback-return */
import React,{ useState } from 'react'
import "../styles/App.css"
import "../styles/PostForm.css"
import "../styles/global.css"
import "../styles/Feed.css"
import "../styles/PostForm.css"

import clockIcon from '../images/clock.svg'
import userIcon from "../images/user.svg"
import paperPlaneIcon from "../images/paper-plane.svg"


import Empty from "./Empty"

export default function Main(){

    const [history, setHistory] = useState('')

    const [userName, setUserName] = useState('')

    const [posts,setPosts] = useState([
        {
            id: (Math.random() * 50).toFixed(),
            content: "Primeiro Post",
            userName: "Gabriel",
            publishedAt: new Date(),
        },
    ]);

    function handleSubmit(e){
        e.preventDefault()
        setPosts([
            ...posts,
            {
                id: (Math.random() * 50).toFixed(),
                content: history,
                userName,
                publishedAt: new Date(),
            }
        ])
        setHistory('')
        setUserName('')
    }


    return(
        <>
            <form className="post-form" onSubmit={handleSubmit}>
                <input value={history} placeholder="Escreva uma nova história..." onChange={(e) => {setHistory(e.target.value)}}/>
                <div>
                    <img src={userIcon} alt="user"/>
                    <input value={userName} placeholder="Digite seu nome ..." onChange={(e) => {setUserName(e.target.value)}}/>
                    <button type="submit">
                        <img src={paperPlaneIcon}/>
                        Publicar
                    </button>
                </div>
            </form>
            <main>
        {posts.length === 0 && (
            <div className='feed-status'>
                <Empty/>
            </div>
        )}
        
        {posts.length > 0 && (
            <>
            <header>
            <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real  </h2>
            </header>

            <section className='feed'>
            {posts.map((post) => (
                <article key={post.id}>
                    <p>
                        {post.content}
                    </p>
                    <footer>
                        <div className='user-details'>
                            <img src={userIcon} alt='User'/>
                            <strong>{post.userName}</strong>
                        </div>
                        <div className='time'>
                            <img src={clockIcon} alt='Clock'/>
                            <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
                        </div>
                    </footer>
                </article>
            ))}
            </section>
            </>
        )}

        </main>
        </>
    )
}