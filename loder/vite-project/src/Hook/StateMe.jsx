import React, { useState } from 'react';

const StateMe = () => {

    
    let [MyObj,SetMyObj]=useState({
        Name:"Lolit",
        Mobile:"01738908541",
        Pass:"Lolit123"
    })

    let Change=()=>{
        SetMyObj(
            MyObj=>({
                ...MyObj,
                Name:"Mohan",
                Mobile:"01777777",
                Pass:"Looooo"
            })
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>This is State Manages</h1>
                    <hr />
                    <p>{MyObj['Name']} {MyObj["Mobile"]}</p>
                    <p>{MyObj['Mobile']}</p>
                    <p>{MyObj['Pass']}</p>
                    <button onClick={Change}>Click?</button>
                </div>
            </div>
        </div>
    );
};

export default StateMe;