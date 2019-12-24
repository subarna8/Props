import React from 'react'
 import './App.css';
// import React from 'react';

 import CV from './CV';
// //import logo from './logo.svg';
// import './App.css';

// let Mahmuda = {
//   name: "Mahmuda Akhter",
//   age: "24",
//   address: "House#120, Road#12, Block#G, South Bonasree, Dhaka-1219",
//   school: "Scholars School",
//   college: "Bangladesh International School and college",
//   university: "IUB"
// }

// let Mahua = {
//   name: "Mahua Akhter",
//   age: "18",
//   address: "House#120, Road#12, Block#G, South Bonasree, Dhaka-1219",
//   school: "Willes Little Flower School",
//   college: "Academia",
//   university: "IUB"
// }




// function App () {
//   return (
//     <div class name = "App" > 

//       <CV info = {Mahmuda}/>
//       <CV info = {Mahua}/>
//     </div>
//   );
// }

// export default App;

// import React from 'react'


// //import Props from './Props'
// import CV from './CV'
// import './App.css';


// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello there!!!</h1>
// //       <Props name = {"Subarna"}/>
// //       <Props name = {"Sara"}/>
// //     </div>
// //   );
// // }
 let Mahmuda = {
  name: "Mahmuda Akhter",
  age: "24",
  address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
  school: "Scholars School",
  college: "BISC",
  university: "IUB"
}

// // let Arpona = {
// //   name: "Mahua Akhter",
// //   age: "19",
// //   address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
// //   school: "Willes Little Flower School",
// //   college: "Academia College",
// //   university: "IUB"
// // }

// export default class App extends React.Component () {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <div>
//         <div>
//         {/* <h3> Name: <input placeholder = 'Name' value = {this.state.name} onChange = {this.handleChange} ></input></h3> */}
//       
//         <CV info = {Mahmuda}/>
//         </div>
        
//       </div>
//     )
//   }
  
// }

 

///////////////////////////////////

export default class App extends React.Component{
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
              <h3> Name: <input placeholder = 'Name'  onChange  ></input></h3>
              <CV info={Mahmuda} />
          </div>
           
        )
    }
}



///////////////////////////////////