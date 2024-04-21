import {useEffect, useState} from "react";
import axios from "axios";
import Validetion from "../Utility/Validetion.jsx";
import FullScreenLoader from "./FullScreenLoader.jsx";

const Products = () => {

    useEffect(() => {
        (async ()=>{
            await  CallProductListApi();
        })()
    }, []);

    const [products,setProducts] =useState(null);


    const CallProductListApi=async ()=>{
        let response=await axios.get(`${Validetion.ApiBase}/product-list`)
        let productList=response.data['data']
        setProducts(productList);

    }

    return (
        <div className="container">
            <div className='row'>
                {
                    products==null?(<FullScreenLoader/>):(
                        products.map((item,index)=>{
                            return(
                                <div key={index} className='col-3'>
                                    <div className='card'>
                                        <img src={item['image']} alt='img'/>
                                        <h2>{item['title']}</h2>
                                        <h4>Price: ${item['discount']==0?(
                                            <p>{item['price']}</p>
                                        ):(<p><strike>{item['price']}</strike> {<p>{item['discount_price']}</p>}</p>)}</h4>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    );
};

export default Products;