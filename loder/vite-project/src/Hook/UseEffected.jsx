import React, { useEffect, useState } from 'react';


const UseEffected = () => {

    let [data,SetData]=useState();

    //Promices data fecth

    // useEffect(()=>{
    //     fetch("https://crud.teamrabbil.com/api/v1/ReadProduct")
    //     .then(res=>res.json())
    //     .then(json=>SetData(json))
    // },[])


    //async await data fecth
    useEffect(()=>{
        (async()=>{
            let res=await fetch("https://dummyjson.com/products/")
            let json = await res.json();
            SetData(json);
        })()
    })

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default UseEffected;