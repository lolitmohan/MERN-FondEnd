import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ValidetionHelper from '../Utiliti/Helper';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast';

const ProductList = () => {

    
    const [Data,setData]=useState(null);
    const [submit,setSubmit]=useState(false);


    useEffect(()=>{
        (async()=>{
            await CallApiProduct()
        })()
    })

    const CallApiProduct=async()=>{
        let res=await axios.get(`${ValidetionHelper.BaseUrl}/product-list`);
        let Products=res.data['data']
        setData(Products)
    }

    const AddToCard=async(id)=>{
        try{  
            setSubmit(true)
            let res=await axios.get(`${ValidetionHelper.BaseUrl}/create-cart/${id}`,ValidetionHelper.tokenHeader());
            setSubmit(false)
            if(res.data['msg']==='success'){
                toast.success('Request Complited')
            }else{
                toast.error('Request Faill')
                setSubmit(false)
            }
        }catch(e){
            ValidetionHelper.Unauthorized(e.response.status)
        }
    }



    return (
        <div>
            {Data==null || submit?(<FullScreenLoader/>):(
                <div className="container">
                    <div className="row">
                        {
                            Data.map((item,i)=>{
                                return(
                                    <div className="col-md-3 col-sm-6">
                                        <div className="card mb-3">
                                            <img src={item['image']} alt="image" />
                                            <h5>Price: $
                                                {
                                                    item['discount']==0?
                                                    (
                                                        <h5>{item['price']}</h5>
                                                    ):
                                                    (
                                                        <h5><strike>{item['price']}</strike>{<h5>{item['discount_price']}</h5>}</h5>
                                                    )
                                                }
                                            </h5>
                                            <h4>Title: {item['title']}</h4>
                                            <button onClick={async()=>{ await AddToCard(item['id'])}} className='btn btn-danger'>Add To Card</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Toaster/>
                </div>
            )}
        </div>
    );
};

export default ProductList;