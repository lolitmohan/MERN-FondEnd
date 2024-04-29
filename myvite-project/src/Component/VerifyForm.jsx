import React, { useState } from 'react';
import FullScreenLoader from './FullScreenLoader';
import ValidetionHelper from '../Utiliti/Helper';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const VerifyForm = () => {

    const [submit,setSubmit]=useState(false);

    const onSubmit=async(e)=>{
        e.preventDefault();
        let formData=new FormData(e.target)
        let OTP=formData.get('otp')
        if(ValidetionHelper.isEmpty(OTP)){
            toast.error("Code is Required")
        }else{
            let email=sessionStorage.getItem('email')
            setSubmit(true);
            let res=await axios.post(`${ValidetionHelper.BaseUrl}/verify-login`,{UserEmail:email,OTP:OTP})
            setSubmit(false);
            if(res.data['msg']==='success'){
                toast.success("Verification Success");
                sessionStorage.removeItem('email');
                sessionStorage.setItem('token',res.data['data'])
                window.location.href="/";
            }else{
                toast.error('Request Fail');
                setSubmit(false);
            }
        }
    }

    return (
        <div className='container '>
            <div className="row justify-content-center p-5">
                <div className="col-md-4">
                    <form onSubmit={onSubmit}>
                    <div className="card">
                        <label className="text-center">Verification code</label><br />
                        <input name="otp" type="text" className='form-control' /><br />
                        <button className='btn btn-success form-control' disabled={submit}>
                            {submit?(<FullScreenLoader/>):("Submit")}
                        </button>
                    </div>
                    </form>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default VerifyForm;