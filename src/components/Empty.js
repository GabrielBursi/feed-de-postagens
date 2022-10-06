import React from 'react'
import "../styles/App.css";
import "../styles/PostForm.css";
import "../styles/global.css";
import "../styles/Feed.css";

import emptyFolderIcon from "../images/empty-folder.svg";

export default function Empty(){
    return(
        <div>
            <img src={emptyFolderIcon} alt='empty folder'/>
            <h1>Não encontramos nada</h1>
            <h2>Parece que você e seus amigos não postaram nada. Comece a escrever uma nova história!</h2>
        </div>
    )
}