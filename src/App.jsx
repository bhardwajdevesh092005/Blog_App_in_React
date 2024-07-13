import { useState, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { login, logout } from './Store/authSilce'
import store from './Store/store'
import authService from '../src/Appwrite/auth'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState("false");
    const dispatch = useDispatch();
    useEffect(() => {

        authService.getCurrentUser().then((userData) => {
            if (userData) {
                dispatch(login({ userData }));
            } else {
                dispatch(logout());
            }
        }).finally(() => { setLoading(false) })
    }, [])
    return (
        <>
            {!loading ? (
                <>
                    <Header />
                    <Outlet />
                    <hr className='border-2 border-black rounded-xl mt-10' />
                    <Footer />
                </>
            ) : null}
        </>
    )
}

export default App
