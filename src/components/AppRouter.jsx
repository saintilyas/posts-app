import React, { useContext, useId } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import Error from '../pages/Error'
import Login from '../pages/Login'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    isAuth 
    ? <Routes>
        {privateRoutes.map(route =>
          <Route path={route.path} element={route.component} key={route.path}/>
        )}
        <Route path='*' element={<Error/>}/>  
      </Routes>
      
    : <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path} element={route.component} key={route.path}/>
        )}
          <Route path='*' element={<Login/>}/>
      </Routes>
    
  )
}

export default AppRouter;