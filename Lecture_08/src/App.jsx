import React  , {Component} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import HeaderClass from "./Components/HeaderClass"

class App extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() { 
    //API call 
   }
  render(){
    return (
      <div>
        
        <HeaderClass name = "Frist"  age = "23"/>
        <Outlet/>
      </div>
    )
  }
}

export default App