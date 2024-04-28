import React from 'react';

const Ratting = ({ratting}) => {

    const setCount=new Array(ratting).fill(undefined);
    console.log(setCount)
    return (
        <>
            <div className="ratting">
                {setCount.map((item,i)=>{
                    return(
                        <i key={i} className="bi bi-star-fill" />

                    )
                })}
            </div> 
        </>
    );
};

export default Ratting;