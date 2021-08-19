import React, { useState, useEffect, Component} from 'react';
import './App.css';
import Axios from 'axios';
import $ from 'jquery';
import Home from './components/Home'
import Table from './components/Table'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
      <Switch>

        <Route path="/:name">
          <Home />
        </Route>

        <Route exact path="/">
          <Table />
        </Route>

      </Switch>
      </div>
    </Router>
  )

//   // CRUD OP 
//   const [shown, setShown] = React.useState(false);
//   const [website, setWebsite] = useState("");
//   const [xpath, setXpath] = useState("");
//   const [element, setElement] = useState("");
//   const [label, setLabel] = useState("");

//   const [newWebsite, setNewWebsite] = useState("");
//   const [newXpath, setNewXpath] = useState("");
//   const [newElement, setNewElement] = useState("");
//   const [newLabel, setNewLabel] = useState("");


//   const [entityList, setEntityList] = useState([]);

//   const addEntity = () => {
//     Axios.post('http://localhost:3001/create', {
//       website: website,
//       xpath: xpath,
//       element: element,
//       label: label,

//     }).then(() => {
//       setEntityList([
//         ...entityList,
//         {
//           website: website,
//           xpath: xpath,
//           element: element,
//           label: label,

//         },
//       ]);
//     });
//   };
  
//   const getEntities = () => {
//     Axios.get("http://localhost:3001/entities").then((response) => {
//       setEntityList(response.data);
//     });
//   };

//   const updateEntityDesc = (id) => {
//     Axios.put("http://localhost:3001/update", {
//       id: id,   
//       website: newWebsite, 
//       xpath: newXpath,
//       element: newElement,
//       label: newLabel,

//       }).then(
//       (response) => {
//         setEntityList(
//           entityList.map((val) => {
//             return val.id == id
//               ? {
//                   id: id,
//                   website: newWebsite,
//                   xpath: newXpath,
//                   element: newElement,
//                   label: newLabel,
//                 }
//               : val;
//           })
//         );
//       }
//     );
//   };

//   const deleteEntity = (id) => {
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
//       setEntityList(
//         entityList.filter((val) => {
//           return val.id != id;
//         })
//       );
//     });
//   };

//   const loadHTML = () => {
//     let url = "get_page.php?url=http://mjt.web.engr.illinois.edu/"
//     $("#page").load(url)
//   }
  
//   // $(document).ready(function(){  
//   //   loadHTML("get_page.php?url=https://machinelearning.illinois.edu/people/");
//   //  });  

// // test websites: http://mjt.web.engr.illinois.edu/ https://alawini.com/

//   return (
//     <div className="App">
//       <div className="information">
//         <h1>Editor/Dashboard</h1>

//         <label>Website:</label>
//         <input type="text" onChange={(event) => {setWebsite(event.target.value);}}/>

//         <label>Xpath:</label>
//         <input type="text" onChange={(event) => {setXpath(event.target.value);}}/>

//         <label>Element:</label>
//         <input type="text" onChange={(event) => {setElement(event.target.value);}}/>

//         <label>Label:</label>
//         <input type="text" onChange={(event) => {setLabel(event.target.value);}}/>


//         <button onClick={addEntity}>Add Entity</button>
//       </div>

//       <div className="entities">
//         <button onClick={getEntities}>Show Entities</button>

//         {entityList.map((val, key) => {
//           return (
//             <div className="entity">
//               <div>
//                 <h3>Website: {val.website}</h3>
//                 <h3>Xpath: {val.xpath}</h3>
//                 <h3>Element: {val.element}</h3>
//                 <h3>Label: {val.label}</h3>
//               </div>

//               <div>
//                 <input type="text" onChange={(event) => {
//                     setNewWebsite(event.target.value);
//                   }}
//                 />

//                 <input type="text" onChange={(event) => {
//                     setNewXpath(event.target.value);
//                   }}
//                 />

//                 <input type="text" onChange={(event) => {
//                     setNewElement(event.target.value);
//                   }}
//                 />

//                 <input type="text" onChange={(event) => {
//                     setNewLabel(event.target.value);
//                   }}
//                 />

//                 <button onClick={() => {updateEntityDesc(val.id);}}>{" "}
//                   Update
//                 </button>

//                 <button onClick={() => {deleteEntity(val.id);}}>Delete</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
      
//       <div className="render">
//         <button onClick={() => loadHTML()}>Render Page</button>
//         <div id="page"></div>
//       </div>

//       <div id="highlight"></div>
      
//     </div>
//   );
  
}

export default App;
