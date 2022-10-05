/* eslint-disable array-callback-return */
import React from 'react';
import "./styles/App.css";
import "./styles/PostForm.css";
import "./styles/global.css";
import "./styles/Feed.css"

import clockIcon from './images/clock.svg'
import userIcon from "./images/user.svg";

export default function Main(){

    const posts = [
        {
            id: (Math.random()*50).toFixed(),
            content: 'Primeiro Post',
            userName: 'Gabriel',
            publishedAt: new Date(),
        },
        {
            id: (Math.random()*50).toFixed(),
            content: 'Segundo Post',
            userName: 'Aline',
            publishedAt: new Date(),
        }
    ]

    return(
        <main>
            <header>
            <h1>Seu Feed</h1>
                <span>Acompanhe o que seus amigos estão pensando em tempo real  </span>
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
        </main>
    )
}