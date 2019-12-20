import React from 'react'

function Academicone (props){
    return (
    <div>
        <h1>Academic Info</h1>
        <h3>School: {props.schoolName} </h3>
        <h3>College: {props.college} </h3>
        <h3>University: {props.university}</h3>
    </div>
    
    );

}
export default Academicone