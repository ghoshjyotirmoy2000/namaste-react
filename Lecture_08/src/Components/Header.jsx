import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = (props) => {
 const {name , age } = props
 const [count , setCount] = useState(0)
 const [count2 , setCount2] = useState(1)
 const handleClick = () => {
    setCount((prev) => prev+1)
 }
 useEffect(() => {
  console.log("UseEffect Called")
  return () => {
    console.log("UseEffect Returned")
  }
 },[])
 console.log("Renderd")
  return (
    <div>
      <h1>This is a functional component Header</h1>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>Count : {count}</p>
      <button onClick={handleClick}>CLick me</button>
      <p>SecondCount : {count2}</p>
      <button onClick={() => (setCount2((prev) => prev+1) )}> Click Me</button>
    </div>

  )
}

export default Header