import React, { useState, useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {

  const [btnDisabled, setBtnDisabled] = useState(true);
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true')
    setIsAuth(true);
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Enter your name' />
        <MyInput type="password" placeholder='Enter your password' />
        <div className='login__btns'>
          <MyButton>Login</MyButton>
          <MyButton>Sign up</MyButton>
        </div>
        
      </form>
    </div>
  )
}

export default Login