import { useState } from 'react';

import '../styles/PostForm.css';

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';
import loader from "../images/loader-white.svg";

export default function PostForm(props) {
  const [history, setHistory] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify({ content: history, userName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        props.onSubmit({ history, userName });
        setHistory("");
        setUserName("");
      })
      .catch((error) => setErrorMessage(`Ocorreu um erro ao cadastrar o post! ( ${error.message} )`))
      .finally(() => setLoading(false));
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error-container">
          <strong>{errorMessage}</strong>
        </div>
      )}
      <input
        value={history}
        placeholder="Escreva uma nova história..."
        onChange={(event) => setHistory(event.target.value)}
      />

      <div>
        <img src={userIcon} alt="User" />

        <input
          value={userName}
          placeholder="Digite seu nome..."
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit" disabled={loading || !history}>
          {!loading && <img src={paperPlaneIcon} alt="Paper plane" />}
          {loading && <img src={loader} alt="loading" className="spin" />}
          Publicar
        </button>
      </div>
    </form>
  );
}