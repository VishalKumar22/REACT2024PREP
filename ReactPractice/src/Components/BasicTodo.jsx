import React, { useState } from "react";

function BasicForm (){
    const[data, setData] = useState([
        {
            name:"Vishal",
            age:22
        },
        {
            name:"Kumar",
            age:21
        },
        {
            name:"Yoyo",
            age:28
        },
     
    ])

    const handleRemove = (id)=> {
        // console.log(index);
        //by splice method
        const copyListItem = [...data]//to avoid Direct mutation 
        copyListItem.splice(id, 1)
        setData(copyListItem)           
        //      or 
        //by filter method
        // const newArr = data.filter((currEle,index)=> {
        //     return index != id;
        // })
        // setData(newArr)
    }

    const clearAllData = ()=> {
        setData ([]);
    }

    return (
        <>
    {
        data.map((allData,index)=> {
            return(
                <h2 key={index}>Name: {allData.name} age: {allData.age} <button onClick={()=>handleRemove(index)}>Remove</button></h2>
                )
            })
    }
    <button onClick={clearAllData}>Clear Data</button>
    </>
)
}

export default BasicForm;