/* eslint-disable jsx-a11y/alt-text */
import './styles/App.css'
import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import './styles/PostForm.css'

export default function App() {
  return (
    <div className="wrapper">
      <form className='post-form'>
        <input placeholder='Escreva uma nova história...'/>
        <div>
          <img src={userIcon} alt='user'/>
          <input placeholder='Digite seu nome ...'/>
          <button type='submit'>
            <img src={paperPlaneIcon}/>
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}