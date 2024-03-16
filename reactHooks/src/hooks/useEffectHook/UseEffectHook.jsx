import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(false);

const [productList, setProductList]  = useState([])

  async function fetchAllData() {
    const response = await fetch('https://dummyjson.com/products')
    const result = await response.json()
    if(result && result.products) setProductList(result.products)
  }

  useEffect(()=> {
    fetchAllData()
  },[])
  
  return (
    <div>
        <h2>useEffect Hook</h2>

     <ul>
        {
            productList && productList.length > 0 ?
            productList.map((item,id) => <li key={id}>{item.title}</li> ) : null
        }
     </ul>
      
    </div>
  );
};

export default UseEffectHook;
