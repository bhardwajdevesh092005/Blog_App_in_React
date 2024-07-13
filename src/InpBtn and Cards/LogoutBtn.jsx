import React from 'react'
import authService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../Store/authSilce'
import { useNavigate } from 'react-router-dom'
function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
            navigate("/login");
        })
    }
    return (
        <div>
            <button onClick={handleLogout} className='rounded-xl  bg-red-600 text-xl p-2 hover:bg-red-400 shadow-black hover:text-gray-700 shadow-md hover:shadow-blue-700'>LogOut</button>
        </div>
    )
}

export default LogoutBtn