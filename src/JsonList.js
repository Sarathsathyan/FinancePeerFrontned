import { useState,useEffect } from "react";
import API from "./API";

const JsonList =()=>{
    const [data, setData] =useState([])

    useEffect(()=>{
        refreshPolicy();
    }, []);

    const refreshPolicy =()=>{
        API.get('/jsonview/')
        .then((res)=>{
            console.log(res.data)
            setData(res.data)

        })
        .catch(console.error)
    }

    const deleteAll =()=>{
        
        console.log('delete')
        API.delete('/jsonview/delete/')
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(console.error)
    }


    return(
        <div>
            <div className="col-md-8 m">
                <div>
                <button onClick={() => { if (window.confirm('Are you sure want to delete entire data?')) deleteAll() } }>Delete All</button>
                </div>
           <table className="table table-hover table-bordered">
             <thead>
               <tr>
                 <th scope="col">User ID</th>
                 <th scope="col">Title</th>
                 <th scope="col">Body</th>
               </tr>
             </thead>
             {data.length > 0 && data ?
             <tbody>
                 
               {data.map((data, index) => {
                 return (
                   <tr key={index}>
                     <th scope="row">{data.userId}</th>
                     <td>{data.title}</td>
                     <td>{data.body}</td>
                   </tr>
                 );
               })}
               
             </tbody>
            :<h2>No data</h2>}
           </table>
         </div>
        </div>
    )

}

export default JsonList;