import Validetion from "../utility/Validetion.jsx";
import toast from "react-hot-toast";
import {useState} from "react";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    let [submit,setSubmit]=useState(false)

    let navigate=useNavigate();

    const onSubmit=async (e)=>{
        e.preventDefault();
        let formData=new FormData(e.target);
        let email=formData.get('email');
        if(Validetion.isEmpty(email)){
            toast.error("Email Required")
        }
        else{
            setSubmit(true)
            //api Call
            let res=await axios.post(`${Validetion.ApiBase}/user-login`,{UserEmail:email})
            setSubmit(false)
            if(res.data['msg']==="success"){
                toast.success(res.data['data'])
                sessionStorage.setItem('email',email)
                navigate("/verify")
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
                                <label>Your Email Address</label>
                                <input name='email' type='email' className='form-control mt-1'/>
                                <button disabled={submit} className="btn btn-success w-100 mt-3">
                                    {
                                        submit?(<ButtonSpinner/>):("Submit")
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

export default LoginForm;