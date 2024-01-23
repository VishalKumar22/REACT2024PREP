import React from 'react';
import {data, data1} from './App';
import { useContext } from "react";

function ChildC () {
  const FirstName = useContext(data);
  const gender = useContext(data1);
    
    return(
        <>
        <h1>Hi my name is {FirstName} and my gender is {gender}</h1>

        </>
    )
}
export default ChildC;