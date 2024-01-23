import React from "react";
import ChildB from "./childB";

function ChildA ({name}) {
    return(
        <ChildB name = {name}/>
    )
}
export default ChildA;