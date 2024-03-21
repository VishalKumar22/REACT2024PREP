import React from 'react'
import "./App.css"
import UseStateHook from './hooks/useStateHook/UseStateHook'
import UseEffectHook from './hooks/useEffectHook/UseEffectHook'
import UserReducerHook from "./hooks/useReducerHook/UseReducerHook"
const App = () => {
  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook/> */}
      <UserReducerHook />
      
    </div>
  )
}

export default App