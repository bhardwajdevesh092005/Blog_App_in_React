import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { login as authLogin } from '../../Store/authSilce'
import authService from '../../Appwrite/auth'
import Input from '../../InpBtn and Cards/Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            } else {

            }
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }
    return (
        <div className='flex w-screen justify-center'>
            <form onSubmit={handleSubmit(login)} className='flex flex-col w-1/3 bg-gray-400 shadow-2xl rounded-xl py-3'>
                <img src="/src/Assets/Logo.png" className='w-1/4 self-center' alt="" />
                <div className='self-center text-xl'>Login into your account</div>
                <div className='self-center text-md'>Don&apos;t have an account?<Link to="/signup" className='text-white'>SignUp</Link></div>
                <div className='self-center my-2'><Input label = {"Username"} className="bg-white rounded-lg px-1" {...register("email",{required:true})}/></div>
                <div className='self-center my-2'><Input label = {"Password"} type = {"password"} className="bg-white rounded-lg px-1" {...register("password",{required:true})}/></div>
                <div className='self-center my-2'><Input type = {"submit"} className="bg-white rounded-lg px-1"/></div>
            </form>
            {error&&<p className='self-center'>{error}</p>}
        </div>
    )
}

export default Login