import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Login from './Components/Forms/Login.jsx'
import Layout from './Components/Layout.jsx'
import Signup from './Components/Forms/Signup.jsx'
import PostForm from './Components/PostForm/PostForm.jsx'
import AllPosts from './Components/AllPosts/AllPosts.jsx'
import PostDisplay from './Components/PostDisplay.jsx/PostDisplay.jsx'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='add-post' element={<PostForm/>}/>
            <Route path='posts' element={<AllPosts/>}/>
            <Route path='post/:id' element={<PostDisplay/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}> 
        <RouterProvider router={route}/>
    </Provider> 
)
