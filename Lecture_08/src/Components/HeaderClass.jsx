import React from "react"

class HeaderClass extends React.Component{
    //The constructor is called when the component is created. super(props) passes the props to the parent React.Component class, so you can access this.props.
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            count2: 0,
            userInfo : {
                name : "",
                id: "",
                userName : "",
                type : ""
            }
            
        } 
        console.log(this.props.name  ,"child constructor called") 
    }
     async componentDidMount() {
        console.log(this.props.name , "child CDM is called")
        // API call
        const data = await fetch('https://api.github.com/users/ghoshjyotirmoy2000');
        const response = await data.json();
        this.setState ({
            userInfo : response
        })
     }

     componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState)
        console.log("Component Updated")
        if(this.state.count != prevState.count){
            console.log("btn clicked")
        }
        if(this.state.count2 != prevState.count2){
            console.log("second btn clicked")
        }
     }

     componentWillUnmount() { 
        console.log("Component will unmounting")
     }


    render() {
        //refers to the props passed from the parent component.
        console.log( this.props.name , "child render called")
        // const {name , age } = this.props   
        const {count , count2} = this.state
        console.log(this.state.userInfo)
        const { name , id , userName , type , public_repos } = this.state.userInfo
        return(
            <div className="header">
                <h1>This is a class component Header</h1>
                <p>Name : {name}</p>
                <p>Id : {id}</p>
                <p>Public Repositories : {public_repos}</p>
                <p>Count : {count} </p>
                <button onClick={() => {
                   this.setState({
                    count : count+1
                   })
                }}>Click Me</button>

                <p>Count2 : {count2}</p>

                <button onClick={() => {
                   this.setState({
                    count2 : count2+1
                   })
                }}>Click Me</button>
            </div>
        )
    }
}

export default HeaderClass;

