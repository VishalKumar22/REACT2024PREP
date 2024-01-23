import React from "react";

//With Destructuring 
function Prop  ({name}) {
    console.log({name});
return(
    <>
    <h1>{name}</h1>
    </>
)
}
export default Prop;


//without Destructuring 
/*
function Prop  (props) {
    console.log({props});
return(
    <>
    <h1>{props.name}</h1>
    </>
)
}
export default Prop;
*/