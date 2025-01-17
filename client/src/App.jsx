import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import './index.css'
import Loading from './Loading'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/loading' element={<Loading/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
