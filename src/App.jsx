import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './AppwriteServices/Auth';
import {login,logout} from './Store/authSlice';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout());
      }
    }).finally(setLoading(false));
  },[])
  return loading?(<div className='min-h-screen text-center self-center'>Loading....</div>):(
    <>
      <Header/>
      <main>
        TODO:<Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App
