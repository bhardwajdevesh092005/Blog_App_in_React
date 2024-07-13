import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import authService from '../../Appwrite/auth';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PostDisplay() {
    const {id} = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state)=>state.userData);
    console.log(userData.$id);
    if(!userData){
        navigate('/login')
    }
    const [post,setPost] = useState({});
    useEffect( async ()=>{
        await authService.getPost(id).then((response)=>{setPost(response);console.log(response);});
    },[id])
    console.log((post.userId === userData.$id));
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
                {(post.userId == userData.$id)&&(<button className='bg-blue-700 text-white p-1 w-fit self-center'>Update</button>)}
            </div>
        </div>
    )
}

export default PostDisplay