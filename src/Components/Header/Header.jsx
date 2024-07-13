import React from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../Appwrite/auth'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function Header() {
    let loggedin = useSelector((state)=>(state.status));
    const navigate = useNavigate();
    const navItems = [
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name:"SignUp",
            slug:"/signup",
            active:!loggedin
        },
        {
            name:"Login",
            slug:"/login",
            active:!loggedin
        },
        {
            name:"All Posts",
            slug:"/posts",
            active:loggedin
        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:loggedin
        }
    ]
    return (
        <div className='flex justify-between p-2 shadow-xl mb-10 rounded-b-xl'>
            <div className='w-1/3'>
                <img src="/src/Assets/Logo.png" alt="" className='w-[100px]'/>
            </div>
            <div className='w-2/3 flex justify-between'>
                {navItems.map((elem)=>(elem.active&&
                    <button onClick={()=>{navigate(elem.slug)}} key={elem.slug} className='rounded-xl bg-red-600 text-xl px-2 hover:bg-red-400 shadow-black hover:text-gray-700 shadow-md hover:shadow-blue-700'>{elem.name}</button>
                ))
                }
                {loggedin&&<LogoutBtn/>}
            </div>
        </div>
    )
}

export default Header