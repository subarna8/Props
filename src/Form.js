import React from 'react'
export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'name',
            age: 'age',
            address: 'address',
            show: false
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
            show : false

        })
    }

    ageChange = (event) => {
        console.log(event.target.value);
        this.setState({
            age: event.target.value,
            show : false

        })
    }

    addressChange = (event) => {
        console.log(event.target.value);
        this.setState({
            address: event.target.value,
            show : false

        })
    }

    buttonClicked = (event) => {
        this.setState({
            show : true
        })

    }
    render()
    {
        console.log("hi")
        return(
            <div>
                <h1>Personal Info</h1>
                <h3> Name: <input placeholder = 'Name' value = {this.state.name} onChange = {this.handleChange} ></input></h3>
                <h3> age: <input placeholder = 'age' value = {this.state.age} onChange = {this.ageChange} ></input></h3>
                <h3> address: <input placeholder = 'address' value = {this.state.address} onChange = {this.addressChange} ></input></h3>
                <button onClick = {this.buttonClicked} >Click Button</button>
                <h3>My name is:</h3> {this.state.show && <div>{this.state.name}</div>}
                <h3>My age is:</h3> {this.state.show && <div>{this.state.age}</div>}
                <h3>My address is:</h3> {this.state.show && <div>{this.state.address}</div>}
            </div>
        )
    }
}