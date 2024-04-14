import React, { useRef } from 'react';

const UsseReeff = () => {

    //InnerHTML

    // const fastName=useRef();
    // const lastName=useRef();

    // const BtnClick=()=>{
    //     let fastN=fastName.current.value;
    //     let lastN=lastName.current.value;
    //     alert(fastN+lastN)
    // }
    // return (
    //     <div className='container'>
    //         <div className="row">
    //             <div className="col-12">
    //                 <h1 style={{color:"green"}}>InnerHTML Learn</h1>
    //                 <hr />
    //                 <input ref={fastName} type="text" placeholder='FastName?' /><br/><br/>
    //                 <input ref={lastName} type="text" placeholder='LastName?' /><br/><br/>
    //                 <button onClick={BtnClick} type="button" class="btn btn-outline-primary">Submit</button><br/><br/>
    //             </div>
    //         </div>
    //     </div>
    // );

    // let FastName=useRef();
    // let LastName=useRef();

    // const change=()=>{
    //    FastName.current.value;
    //    LastName.current.value;
    // }
    // return (
    //     <div className='container'>
    //         <div className="row">
    //             <div className="col-12">
    //                 <h1 style={{color:"green"}}>Input Element</h1>
    //                 <hr />
    //                 <input ref={FastName} type="text" placeholder='FastName?' /><br /><br />
    //                 <input ref={LastName} type="text" placeholder='LastName?' /><br /><br />
    //                 <button onClick={change}  class="btn btn-primary">Click</button>
    //                 <br />
    //             </div>
    //         </div>
    //     </div>
    // );

    // let MyHeading=useRef();

    // const change=()=>{
    //    MyHeading.current.classList.remove("text-success");
    //    MyHeading.current.classList.add("text-danger");
    // }
    // return (
    //     <div className='container'>
    //         <div className="row">
    //             <div className="col-12">
    //                 <h1 style={{color:"green"}}>Add, Remove Css Class</h1>
    //                 <hr />
    //                 <h1 ref={MyHeading} className='text-success'>This is Head Line</h1>
    //                 <br /><br />
    //                 <button onClick={change}  class="btn btn-primary">Click</button>
    //                 <br />
    //             </div>
    //         </div>
    //     </div>
    // );

    // //useRef muteabole valu===
    // let number=useRef(0);
    // const change=()=>{
    //    let num=number.current++;
    //    console.log(num)
    // }
    // return (
    //     <div className='container'>
    //         <div className="row">
    //             <div className="col-12">
    //                 <h1 style={{color:"green"}}>Muteable value</h1>
    //                 <hr />
    //                 <button onClick={change}  class="btn btn-primary">Click</button>
    //                 <br />
    //             </div>
    //         </div>
    //     </div>
    // );


// Feacth Data ====
    let APiData=useRef(null);
    let MyPtag=useRef();
    const FacthData=async()=>{
        let res= await fetch('https://dummyjson.com/products')
        APiData.current=await res.json();
    }
    const showData=()=>{
        MyPtag.current.innerText=JSON.stringify(APiData.current)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 style={{color:"green"}}>fetch Data / Api Call</h1>
                    <hr />
                    <p ref={MyPtag}></p>
                    <button onClick={FacthData}  class="btn btn-primary">call Api</button><br/>
                    <button onClick={showData}  class="btn btn-primary">Show Data</button><br/>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default UsseReeff;