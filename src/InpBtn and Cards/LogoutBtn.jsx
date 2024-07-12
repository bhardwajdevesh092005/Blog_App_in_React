import React from 'react'
import authService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../Store/authSilce'
function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return (
        <div>
            <button className='p-1 bg-blue-800 text-white rounded-xl overflow-auto'>LogOut</button>
        </div>
    )
}

export default LogoutBtn