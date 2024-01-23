import { createContext } from 'react'
import './App.css'
import ChildA from './ChildA';

//Context Api (create , Provider, useContext)
const data = createContext();
const data1 = createContext();

function App() {
  const name =  "Vishal";
  const gender = "Male";

  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
        <ChildA/>
      </data1.Provider>
    </data.Provider>
    </>
  )
}

export default App;
export {data, data1};
