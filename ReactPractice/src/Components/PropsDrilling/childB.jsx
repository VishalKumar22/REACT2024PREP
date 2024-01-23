import React from "react";
import ChildC from "./childC";

function ChildB ({name}) {
    return(
        <ChildC name={name}/>
    )
}
export default ChildB;