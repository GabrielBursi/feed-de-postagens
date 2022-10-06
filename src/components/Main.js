/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React from 'react'
import "../styles/App.css"
import "../styles/PostForm.css"
import "../styles/global.css"
import "../styles/Feed.css"
import "../styles/PostForm.css"

import clockIcon from '../images/clock.svg'
import userIcon from "../images/user.svg"


import Empty from "./Empty"

export default function Main(props){
    return(
        <>
            
            <main>
                {props.posts.length === 0 && (
                    <div className='feed-status'>
                        <Empty/>
                    </div>
                )}
        
                {props.posts.length > 0 && (
                    <>
                    <header>
                    <h1>Seu Feed</h1>
                        <h2>Acompanhe o que seus amigos estão pensando em tempo real  </h2>
                    </header>

                    <section className='feed'>
                    {props.posts.map((post) => (
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