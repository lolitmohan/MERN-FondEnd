
import ButtonSpinner from "./ButtonSpinner.jsx";
import {useState} from "react";
import Validetion from "../utility/Validetion.jsx";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyForm = () => {

    let [submit,setSubmit]=useState(false)


    const onSubmit=async (e)=>{
        e.preventDefault();
        let formData=new FormData(e.target);
        let otp=formData.get('otp');
        if(Validetion.isEmpty(otp)){
            toast.error("Verification code Required")
        }
        else{
            let email=sessionStorage.getItem('email')
            setSubmit(true)
            //api Call
            let res=await axios.post(`${Validetion.ApiBase}/verify`,{UserEmail:email,OTP:otp})
            setSubmit(false)
            if(res.data['msg']==="success"){
                sessionStorage.removeItem('email')
                sessionStorage.setItem('token',res.data['data'])
                window.location.href="/"
            }
            else {
                toast.error("Request Fail")
                setSubmit(false)
            }

        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className='mt-4'>
                            <div className="p-4">
                                <label>Verification code</label>
                                <input name='otp' type='text' className='form-control mt-1'/>
                                <button disabled={submit} className="btn btn-success w-100 mt-3">
                                    {
                                        submit ? (<ButtonSpinner/>) : ("Submit")
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyForm;