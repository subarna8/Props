// import React from 'react';
// import CV from './CV';
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

import React from 'react';

//import Props from './Props'
import CV from './CV'
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello there!!!</h1>
//       <Props name = {"Subarna"}/>
//       <Props name = {"Sara"}/>
//     </div>
//   );
// }
let Mahmuda = {
  name: "Mahmuda Akhter",
  age: "24",
  address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
  school: "Scholars School",
  college: "BISC",
  university: "IUB"
}

let Arpona = {
  name: "Mahua Akhter",
  age: "19",
  address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
  school: "Willes Little Flower School",
  college: "Academia College",
  university: "IUB"
}

function App() {
  return (
    <div className="App">
      <CV info = {Mahmuda}/>
      <CV info = {Arpona} />
    </div>
  );
}

export default App