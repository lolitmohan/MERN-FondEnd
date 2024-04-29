import React, { useState } from 'react';
import ValidetionHelper from '../Utiliti/Helper';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import FullScreenLoader from './FullScreenLoader';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [submit,setSubmit]=useState(false);

    const navigat=useNavigate()
    
    const onSubmit=async(e)=>{
        e.preventDefault()
         let formData=new FormData(e.target);
         let email=formData.get('email');
        if(ValidetionHelper.isEmpty(email)){
            toast.error('Email Required')
        }
        else{
            
            setSubmit(true)
            let res=await axios.post(`${ValidetionHelper.BaseUrl}/user-login`,{UserEmail:email})
            setSubmit(false);
            if(res.data['msg']==='success'){
                toast.success("Request Complite");
                sessionStorage.setItem('email',email);
                navigat("/verify")
            }else{
                toast.error("Requiest Fail");
                setSubmit(false)
            }
        }

    }
    return (
        <div className='container'>
            <div className="row justify-content-center p-5">
                <div className="col-md-4">
                    <div className="card p-4">
                        <form onSubmit={onSubmit}>
                            <label>Your Email Address</label><br /><br />
                            <input name='email' type="email" className='form-control' /><br />
                            <button disabled={submit} className='btn btn-success w-100'>
                            {submit?(<FullScreenLoader/>):("Submit")}
                            </button>
                        </form>
                    </div>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default LoginForm;