import React, { useState } from 'react';

const FormSubmit = () => {

    const [FormObj,SetFormObj]=useState({fName:'',lName:'',city:'',gender:''});


    const InputOnChange=(property,value)=>{
        SetFormObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }

    const FormSubmited=(e)=>{
        e.preventDefault();
        console.log(FormObj)
        alert(JSON.stringify(FormObj))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>FormSubmited</h1>
                    <hr />
                    <form onSubmit={FormSubmited}>

                        <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} placeholder='FastName' /><br /><br />
                        <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} placeholder='LastName' /><br /><br />

                        <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
                            <option value=" ">Choss City</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Rongpur">Rongpur</option>
                            <option value="Kholna">Kholna</option>
                            <option value="Borishal">Borishal</option>
                            <option value="Chottrogram">Chottrogram</option>
                            <option value="Moymonshing">Moymonshing</option>
                            <option value="Shilet">Shilet</option>
                            <option value="Rashahi">Rashahi</option>
                        </select><br /><br />

                        <input onChange={()=>{InputOnChange("gender",'Male')}} checked={FormObj.gender==="Male"} name='gender' type="radio" />Male <br />
                        <input onChange={()=>{InputOnChange("gender",'Female')}} checked={FormObj.gender==="Female"} name='gender' type="radio" />Female<br /><br />
                        <button className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSubmit;