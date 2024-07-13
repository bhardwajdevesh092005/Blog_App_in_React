import React, { useEffect, useState } from 'react'
import authService from '../../Appwrite/auth'
import PostCard from '../../InpBtn and Cards/PostCard'

function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        authService.getPosts().then((posts)=>{
            if(posts)setPosts(posts.documents)});
    },[])
    if(posts.length === 0){
        return <>NO POSTS FOR YOUR ACCOUNT</>
    }
    return (
        <div className='flex justify-start'>
            {posts.map((post)=>(<PostCard title={post.title} image={post.image} key={post.$id} $id={post.$id}/>))}
        </div>
    )
}
export default AllPosts