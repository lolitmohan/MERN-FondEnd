import axios from 'axios';
import { useEffect, useState } from 'react';
import FullScreenLoader from './FullScreenLoader';
import ValidetionHelper from './../utility/Validetion';
import toast from "react-hot-toast";

const ProductLIst = () => {
    let [data,SetData]=useState(null);
    useEffect(()=>{
        (async()=>{
            await CallProductList()
        })()
    },[])
    const CallProductList=async()=>{
        let res= await axios.get(`${ValidetionHelper.ApiBase}/product-list`)
        let ProductsList=res.data['data'];
        SetData(ProductsList);
    }

    const AddToCard=async (id)=>{
        try{
            let res=await axios.post(`${ValidetionHelper.ApiBase}/create-card/${id}`,ValidetionHelper.tokenHeader())
            if(res.data['msg']==="success"){
                toast.success('Request Complited')
            }else{
                toast.error('Request Complited')
            }
        }
        catch (e){
            ValidetionHelper.Unauthorized(e.response.status)
        }
    }

    return (
        <div>
            {data==null?(<FullScreenLoader/>):(
                <div className="container">
                    <div className="row">
                        {
                            data.map((item,i)=>{
                                return(
                                
                                <div key={i} className="col-md-3">
                                    <div className="card p-3 mt-2">
                                    <img src={item['image']} alt="" />
                                    
                                    <p>Title: {item['title']}</p>
                                    <h5>PRICE :
                                    {
                                        item['discount']==0?(<p>{item['price']}</p>):
                                        (
                                            <p><strike>{<p>{item['price']}</p>}</strike> {<p>{item['discount_price']}</p>}</p>
                                        ) 
                                    }
                                    </h5>
                                        <button onClick={()=>{AddToCard(item['id'])}} className="btn btn-danger">Add to Card</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductLIst;