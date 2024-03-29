//get the data{value, onchange}
//store the data is another state {onsubmit} 
//display that data (map)


import React, { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //Data will be stored here when cliked to submit btn
    const [userData, setuserData] = useState([])

    //onSubmit
    const onSubmit = (event) => {
        event.preventDefault();
        if(username && email && password){
            const newUserData = {  id: new Date().getTime().toString(), username, email, password };
            setuserData([...userData, newUserData])
    
            setUsername("")
            setEmail("")
            setPassword("")
        }else{
            alert("Please fill the form properly")
        }

    }

      
    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="form" >
                {/* Username */}
                <label htmlFor="username">Username:</label>
                <input 
                type="text"
                name="username"
                placeholder="Enter your username"
                id="username"
                value={username}
                // onChange:it will check each letters. 
                onChange={(e) => setUsername(e.target.value)}//what ever user type in input, storing that data in state 
                
                 />
                 {/* Email */}
                <label htmlFor="email">Email:</label>
                <input 
                type="text"
                name="email"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                 />
                 {/* Password */}
                <label htmlFor="Password">Password:</label>
                <input 
                type="text"
                name="Password"
                placeholder="Enter your Password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                 />
            </div>
            <button type="submit">Login</button>
        </form>

        <ol>
        {
            userData.map((data)=> {
                //object destructuring 
                const {id, email, password} = data;
                return(
                        <li 
                        key={id}>
                        Username:{username},
                        Email: {email},
                        Password:{password}
                        </li>
                )
            })
        }
        </ol>        
        </>
    )
}

export default Form;
