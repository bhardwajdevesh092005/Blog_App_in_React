import React from 'react'
import authService from '../Appwrite/auth'
import { useNavigate } from 'react-router-dom'
function PostCard({$id,title,image,}) {
    const navigate = useNavigate();
    return (
        <div onClick={navigate(`/post/${$id}`)} className='bg-gray-700 rounded-xl overflow-auto'>
            <img src={authService.getFilePreview(image)} alt={title} className='rounded-lg p-2' />
            <h2>{title}</h2>
        </div>
    )
}
export default PostCard