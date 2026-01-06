import { Route, Routes } from "react-router"
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import PostPage from "./pages/PostPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"

//? Blog:
//? - MainPage (/) -> Where all the blogs are
//? - LoginPage (/login) -> Where the login screen is
//? - PostPage (/post) -> Login user can post a blog
//! Unauthenticated users cannot access /post (PostPage)

function App() {
  return (
    <div
      className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden"
    >
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/post" element={ <PostPage/> } />
      </Routes>
    </div>
  )
}

export default App
