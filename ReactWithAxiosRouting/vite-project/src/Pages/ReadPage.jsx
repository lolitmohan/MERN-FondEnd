import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast,{Toaster} from 'react-hot-toast'
import fullScreenLoader from '../loder/fullScreenLoader';

const ReadPage = () => {

    const [ProductData,setProductData]=useState([])

    const [refresh,setRefresh]=useState(0);

    const [loding, setLoging]=useState(true);


    //useEffect
    useEffect(()=>{
        CallReadApi()
    },[refresh]);

    const CallReadApi=async()=>{
        let res= await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
        let data = res.data['data']
        setProductData(data)
        setLoging(false)
    }

    const OnclickDelete=async(id)=>{
        setLoging(true)
        let res=await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`)
        let data =res.data['status']
        if(data==="success"){
            toast.success('Delete Success')
            setRefresh(refresh+1)
            
        }
        else{
            setLoging(false)
            toast.error("Delete Fail")
        }
    }
    return (
        <>
        {loding && <fullScreenLoader/>}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product List</h1>
                    <button onClick={()=>{setRefresh(refresh+1)}} className='btn btn-success'>Refresh</button>
                    <hr />
                    <table className='table table-striped'>
                        <tbody>
                            {
                              ProductData.length>0 &&
                              ProductData.map((item,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{item._id}</td>
                                        <td>{item.ProductName}</td>
                                        <td>{item.Qty}</td>
                                        <td>{item.TotalPrice}</td>
                                        <td>{item.UnitPrice}</td>
                                        <td>{item.ProductCode}</td>
                                        <td>{item.CreateDate}</td>
                                        <button onClick={()=>OnclickDelete(item._id)} className='btn btn-danger'>Delet</button>
                                    </tr>
                                )
                              })  
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster/>
        </div>
        </>
    );
};

export default ReadPage;