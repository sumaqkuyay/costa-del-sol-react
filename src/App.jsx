import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import PartnerRequests from './views/PartnerRequests';
import GuestEntrance from './views/GuestEntrance';
import GuestList from './views/GuestList';
import PartnerFile from './views/PartnerFile';
import PartnerData from './views/PartnerData';
import './sass/index.scss';



const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/partnerRequests" exact component={PartnerRequests} />
        <Route path="/guestEntrance" exact component={GuestEntrance} />
        <Route path="/guestList" exact component={GuestList} />
        <Route path="/partnerFile" exact component={PartnerFile} />
        <Route path="/partnerData" exact component={PartnerData} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;


// import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { addSocios } from './controller/firestore';

// const App = () => {

//   const [data, setData] = useState([]);
// 	useEffect(() => {
// 		fetch('socios.json', {
// 		  headers: {
// 			'Content-Type': 'application/json',
// 			'Accept': 'application/json',
// 		  },
// 		}).then((response) => {
// 		  try {
// 			console.log(response)
// 			return response.json();
// 		  } catch (e) {
// 			return Promise.reject(new Error('No se encontraron los datos'));
// 		  }
// 		}).then((datos) => {
// 			console.log(datos)
// 			setData(datos);
// 		  }).catch((e) => {
// 			console.log(e);
// 			console.log('No se encontró el archivo')
// 		  });
// 	  }, []);

// 	  const handleSend = (e) => {
// 		e.preventDefault();
// 		data.forEach((element) => {
// 		  console.log('acá');
// 		  addSocios(element);
// 		});
// 	  };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button onClick={handleSend}>SUBIR DATA</button>
//       </header>
//     </div>
//   );
// }

// export default App;

