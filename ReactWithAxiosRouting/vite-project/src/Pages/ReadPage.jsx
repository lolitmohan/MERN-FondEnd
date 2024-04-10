import {useEffect, useState} from "react";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import FullScreenLoader from "../loder/FullScreenLoader.jsx";

const ReadPage = () => {

    const [ProductData,SetProductData]=useState([])
    const [refresh,SetRefresh]=useState(0)
    const [Loading,SetLoading]=useState(true)


    //useEffect->
    useEffect(() => {
        CallReadAPI();
       // 1
        // 2
        //3
    }, [refresh]);


    const CallReadAPI=async ()=>{
        let res= await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");
        let ProductList=res.data['data'];
        SetProductData(ProductList)
        SetLoading(false)
    }


    const onDeleteClick=async (id)=>{
        SetLoading(true)
        let res= await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`);
        let deleteStatus=res.data['status']
        if(deleteStatus==="success"){
            toast.success("Delete Success")
            CallReadAPI();
        }else{
            SetLoading(false)
            toast.error("Delete Fail")
        }
    }



    return (
        <>
            {Loading &&  <FullScreenLoader/>}

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Product List</h1>
                        <button onClick={() => SetRefresh(refresh + 1)} className="btn btn-secondary">Refresh</button>
                        <hr/>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <tbody>
                                {
                                    ProductData.length > 0 &&
                                    ProductData.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item['_id']}</td>
                                                <td>{item['ProductName']}</td>
                                                <td>{item['ProductCode']}</td>
                                                <td><img style={{width: '20px', height: 'auto'}} src={item['Img']}/></td>
                                                <td>{item['UnitPrice']}</td>
                                                <td>{item['Qty']}</td>
                                                <td>{item['TotalPrice']}</td>
                                                <td>{item['CreatedDate']}</td>
                                                <button onClick={() => onDeleteClick(item['_id'])}
                                                        className="btn btn-danger">Delete
                                                </button>
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
        </>

    );
};

export default ReadPage;