import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import authService from '../../Appwrite/auth';
import parse from 'html-react-parser';
function PostDisplay() {
    const {id} = useParams();
    const [post,setPost] = useState({});
    useEffect( async ()=>{
        await authService.getPost(id).then((response)=>{setPost(response);console.log(response);});
    },[id])
    return (
        <div className='w-screen flex justify-center flex-col'>
            <div className='w-1/2 self-center flex flex-col bg-slate-600 p-4 rounded-xl shdow-xl'>
                <div className='self-center rounded-xl p-2 mb-2 text-3xl text-white bg-red-700 shadow-blue-600 shadow-md w-fit'>
                    <h2>{post.title}</h2>
                </div>
                <div className='self-center h-full'>
                    <img src={authService.getFilePreview(`${post.image}`)} alt="" className='rounded-xl shadow-red-400 shadow-lg mb-4'/>
                </div>
                <div>
                    {parse(String(post.content))}
                </div>
            </div>
        </div>
    )
}

export default PostDisplay