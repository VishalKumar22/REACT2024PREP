import { useState } from 'react'
import './App.css';
import ToggleName from './Components/ToggleName';
import BasicForm from './Components/BasicTodo';
import Form from './Components/BasicForm';
import Todo from './Components/Todo'
import Prop from './Components/props1';
import ChildA from './Components/PropsDrilling/childA'

function App() {
  const name = "Vishal"

  return (
    <>
     {/* <ToggleName /> */}
     {/* <BasicForm /> */}
     {/* <Form /> */}
     {/* <Todo /> */}
     {/* <Prop name= "Vishal" /> */}
     <ChildA name= {name}/>
    </>
  )
}

export default App
