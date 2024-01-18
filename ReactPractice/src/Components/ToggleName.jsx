import {useState} from 'react';
function ToggleName () {
  const [userName, setUserName] = useState("Vishal")
  const changeUserName = ()=> 
  setUserName(
    userName =="Vishal"? "Kumar" : "Vishal"
  )
  
  return(
    <>
      <h1>{userName}</h1>
      <button onClick={changeUserName}>Toggle Name</button>
    </>
  )
}

export default ToggleName;
  
  
