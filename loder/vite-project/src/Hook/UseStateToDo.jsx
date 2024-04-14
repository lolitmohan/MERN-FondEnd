import React, { useState } from 'react';

const UseStateToDo = () => {

    const [Item,SetItem]=useState("")
    const [List,SetList]=useState([]);



    const AddToList=()=>{
        List.push(Item)
        SetList([...List])
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>ToDo List</h1>
                    <hr />

                    <input onChange={(e)=>SetItem(e.target.value)} type="text" placeholder='your Text?' /><br /><br />
                    <button onClick={AddToList} className='btn btn-success'>Add</button><br /><br />
                    <div className="list">
                        <ol>
                            {
                                List.length!==0?(
                                    List.map((item,i)=>{
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                ):(
                                    <ul></ul>
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseStateToDo;
// import React, { useState } from 'react';
// const UseStateToDo = () => {
//     const [List,SetList]=useState([])
//     const [Item,SetItem]=useState("")
//     const AddToList=()=>{
//         List.push(Item)
//         SetList([...List])
//     } 
//     const RemoveList=(i)=>{
//         List.splice(i,1)
//         SetList([...List])
//     }
//     return (
//         <div className='container'>
//             <div className="row">
//                 <div className="col-12">
//                     <h1>Todo</h1>
//                     <hr />
//                     <input onChange={(e)=>SetItem(e.target.value)} type="text" placeholder='Your Text' /><br /><br />
//                     <button className='btn btn-success' onClick={AddToList}>Add Item</button><br />
//                     <p>{Item}</p><br />
//                     <hr />
//                     <table>
//                         <tbody>
//                             {
//                                 // List.length>0 &&
//                                 List.length!==0?(
//                                     List.map((item,i)=>{
//                                         return(
//                                             <tr>
//                                                 <td>{item}</td>
//                                                 <td><button onClick={RemoveList}>Remove</button></td>
//                                             </tr>
//                                         )
//                                     })
//                                 ):(
//                                     <tr></tr>
//                                 )
//                                 // List.map((item,i)=>{
//                                 //     return(
//                                 //         <tr>
//                                 //             <td>{item}</td>
//                                 //             <td><button onClick={()=>RemoveList(i)} className='btn btn-danger'>Remove</button></td>
//                                 //         </tr>
//                                 //     )
//                                 // })
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default UseStateToDo;