import React, { useEffect, useState,} from "react";


//get local data from LocalStorage
const getLocalData = () => {
    let list = localStorage.getItem('lists')

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [listData, setlistData ] = useState(getLocalData())

    //Add Button
    const addButton = () => {
        if(!inputData){
            alert("Input should not be empty!")
        }else{
            setlistData([...listData, inputData])
            setInputData('');       
        }
    }
    
    //handleRemove
    const handleRemove = (id) => {
        const updatedList = [...listData]//to avoid Direct Mutation.
        updatedList.splice(id, 1)
        setlistData(updatedList)
    }

    //clearAllTodos
    const clearAllTodos = () => {
        setlistData([])
    }

    //add data to LocalStorage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(listData))
    }, [listData])
    
    return(
        <>
        <div>
            <input 
            type="text"
            placeholder="Enter your todo"
            value={inputData}
            onChange={(e)=> setInputData(e.target.value)}            
            />
            <button onClick={addButton}>Add</button>
        </div>   
        
        {
            listData.map((data, index)=> {
                return(

                    <div key={index}>
                    <ul>
                        <li>{data} <button onClick={()=>handleRemove(index)}>Remove</button></li>
                    </ul>
                    </div>
                    
                )
            })
        } 
        <button onClick={clearAllTodos}>Clear All</button>
        </>

    )    
}

export default Todo;