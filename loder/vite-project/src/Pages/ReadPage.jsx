import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import FullScreenLoder from '../Loder/FullScreenLoder';

const ReadPage = () => {

    const [ProductData,SetProductData]=useState([])
    const [Refesh,SetRefesh]=useState(0)
    const [Loding,SetLoding]=useState(true)


    useEffect(()=>{
        ApiCallReadProduct()
    },[Refesh])

    const OnClickProduct=async(id)=>{
        SetLoding(true)
        // let res= await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`)
        let res= await axios.delete(`https://dummyjson.com/products/${id}`)
        let ProductDelete=res.data['products']
        if(ProductDelete==="products"){
            toast.success("Delete Success")
            ApiCallReadProduct()
        }
        else{
            SetLoding(false)
            toast.error('Delete Fail')
        }
    }

    const ApiCallReadProduct=async(e)=>{
        // let res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
        let res=await axios.get("https://dummyjson.com/products")
        let ProductList=res.data['products']
        SetProductData(ProductList)
        SetLoding(false)
    }

    return (
        <div className="container">
            {Loding && <FullScreenLoder/>}
            <div className="row">
                <div className="col-12">
                    <h1>Product List</h1>
                    <button onClick={()=>SetRefesh(Refesh+1)}>Refesh</button>
                    <hr />
                    <div className="table-responsive">
                        <table className='table table-striped'>
                            <tbody>
                                {
                                    ProductData.length>0 &&
                                    ProductData.map((item,i)=>{
                                        return(
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.stock}</td>
                                                <td>{item.brand}</td>
                                                <button onClick={()=>OnClickProduct(item._id)} className='btn btn-danger'>Delete</button>
                                            </tr>
                                            
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    )
};

export default ReadPage;