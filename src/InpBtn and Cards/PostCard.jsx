import React from 'react'
import authService from '../Appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
function PostCard({$id,title,image}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{navigate(`/post/${$id}`)}} className=' overflow-auto w-screen flex flex-col my-3'>
            <div className='self-center w-fit bg-gray-700 rounded-xl '>
            <img src={authService.getFilePreview(image)} alt={title} className='shadow-md shadow-white rounded-2xl h-[400px] w-[300px] p-2' />
            <h2 className='text-center my-2'>{title}</h2>
            </div>
            
        </div>
    )
}
export default PostCard