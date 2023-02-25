import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className={isAuth ? "navbar" : "navbar disable"}>
    <MyButton onClick={logout}>Log out</MyButton>
      <div className="navbar__links">
        <MyButton><Link to="/about" style={{textDecoration:'none', color:'teal'}}>About</Link></MyButton>
        <MyButton><Link to="/posts" style={{textDecoration:'none', color:'teal'}}>Posts</Link></MyButton>
       
      </div>
    </div>
  )
}

export default Navbar