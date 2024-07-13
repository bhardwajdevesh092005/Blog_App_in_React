import React, { useCallback, useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../InpBtn and Cards/Input'
import RTE from '../RTE'
import authService from '../../Appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Select from '../../InpBtn and Cards/Select'

function PostForm({ post = null }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        Title: post?.Title || "",
        Slug: post?.slug || "",
        Content: post?.Content || "",
        Status: post?.Status || ""
    });
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const [error,setError ] = useState("");
    const [file,setFile] = useState("")
    const submit = async (data) => {
        console.log("Submit Clicked");
        if (post) {
            console.log("If block");
            const file = data.image[0] ? authService.uploadFile(data.image[0]) : null;
            if (file) {
                try {
                    authService.delFile(post.Image);
                } catch (error) {
                    console.log(error);
                }
            }
            const new_post = await authService.updatePost(post.$id, {
                ...data,
                image: file ? file.$id : undefined
            })
            navigate(`/post/${new_post.$id}`);
        } else {
            console.log("Else Block");
            await authService.uploadFile(data.image[0]).then((response)=>{console.log(response);data.image = String(response.$id)});
            // if(file){
            //     data.image = file;
                console.log("Set the data image field as:",file);
            // }
            const new_post = await authService.createPost({
                ...data,
                userId:userData.$id,
                slug:data.slug
                
            })
            console.log(data);
            if(new_post){
                console.log("Navigate Block");
                navigate(`/post/${new_post.$id}`);
            }
        }
    }
    const slug_transform = useCallback((value)=>{
        if(value&&typeof(value) == 'string'){
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d]+/g,'-').replace(/\s/,"-");
        }
    },[])
    const loggedIn = useSelector((state)=>(state.status));
    // useEffect(()=>{
    //     if(!loggedIn){
    //         navigate('/login');
    //     }
    // },[loggedIn])
    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name == 'title'){
                setValue('slug',slug_transform(value))  
            }
        });
        return ()=>{subscription.unsubscribe()}
    },[watch,slug_transform,setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className='w-screen ml-4 flex'>
            <div className='w-2/3'>
                <Input label={"Title"} className="bg-slate-600 rounded-xl text-white px-1 my-1" {...register("title",{required:true})}/>
                <Input label={"Slug"} className="bg-slate-600 rounded-xl text-white px-1 mb-1"{...register("slug",{required:true})} />
                <RTE control={control} label={"Create Content for your Post:"} default_value={getValues("content")}/>
            </div>
            <div className='w-1/3 ml-5 space-y-10'>
                <Input type = "file" accept="image/png, image/jpg, image/jpeg, image/gif" {...register("image",{required:!post})}/>
                {post&&(<img src={authService.getFilePreview(post.image)} alt = "file preview">
                </img>)}
                <Select
                options = {["active","inactive"]}
                className = "bg-black text-white"
                label = {"Status"}
                {...register("status",{required:true})}
                />
                <Input type = "submit"/>
            </div>
            <p>{error}</p>
        </form>
    )
}

export default PostForm