// import React from 'react';
// import Academic from './Academic'
// import Personal from '.Personal'
// //import logo from './logo.svg';
// import './App.css';




// function CV (props) {
//   return (
//     <div className = "CV">
      
//       <Personal name = {props.info.name} age = {props.info.age} address = {props.info.address}/>
//       <Academic schoolName = {props.info.school} college = {props.info.college} university = {props.info.university}/>
//     </div>
//   );
// }

// export default CV;

import React from 'react';

//import Academic from './Academic'
//import Personal from './Personal'

import Academic from './Academic'
import Personal from './Personal'

import './App.css';


function CV(props) {
    console.log(props)
  return (
    <div className="CV">
      <Personal name = {props.info.name}  age = {props.info.age} address = {props.info.address} />
      <Academic schoolName = {props.info.school}  college = {props.info.college} university = {props.info.university}/>
      
    </div>
  );
}

export default CV
