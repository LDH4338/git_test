import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage/ProfilePage'

import LoginForm from "./components/LoginForm/LoginForm"
import SignupForm from './components/SignupForm/SignupForm'

import Test from './components/Test/Test'
import List2 from './components/List/List2'

function App() {
  // console.log('app');
  const tokenAtClient = () => {
    return localStorage.getItem("access_token")
    // 이게 서버에 요청보내고 응답 받는거라면? + 김윤오 병신 + git branch 생성+ 다시해볼까? 다시 main에서 newbranch secondbranch commit
    // 이건 팀장이 main브랜치에서 만든 변경사항
    // 이건 팀장이 main브랜치에서 만든 두번째 변경사항
    // 이건 팀장이 main브랜치에서 만든 세번째 변경사항
    // 이건 이동환이 fork clone 과정 후 commit함
  }
  const [isAuth, setIsAuth] = useState(tokenAtClient())

  return (
    <Router>
      <div className= { isAuth ? 'with-sidebar' : 'no-sidebar' } >
      {isAuth ? (
        // 인증된 유저들라우팅
        <>
          <Sidebar/>
          <div className="inner">

          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/search' element = {<SearchPage/>}></Route>
            <Route path='/create' element = {<CreatePage/>}></Route>
            <Route path='/:userID' element = {<ProfilePage/>}></Route>
            <Route path='/dynamic/:param' element = {<Test/>}></Route>
            <Route path='/test' element = {<List2/>}></Route>
            <Route path='*' element = {<Navigate to="/"/>}></Route> 
          </Routes>

          </div>
        </>        
      ) : (
        <Routes>
          <Route path='/' element = {<LoginForm setIsAuth={setIsAuth}/>}></Route>
          <Route path='/signup' element = {<SignupForm/>}></Route> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}        
      </div>
      {/* {isAuth ? (
        // 인증된 유저들라우팅
        <>
          <Sidebar/>
          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/search' element = {<SearchPage/>}></Route>
            <Route path='/create' element = {<CreatePage/>}></Route>
            <Route path='/:userId' element = {<ProfilePage/>}></Route>
            <Route path='/test' element = {<List2/>}></Route>
            <Route path='*' element = {<Navigate to="/"/>}></Route> 
          </Routes>
        </>        
      ) : (
        <Routes>
          <Route path='/' element = {<LoginForm setIsAuth={setIsAuth}/>}></Route>
          <Route path='/signup' element = {<SignupForm/>}></Route> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )} */}
    </Router>  
  )
}

export default App
