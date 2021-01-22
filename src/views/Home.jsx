import React, {useEffect, useState} from 'react';
import SideBar from '../components/SideBar'
import { addSocios } from '../controller/firestore';

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('socios.json', {
		  headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		  },
		}).then((response) => {
		  try {
			console.log(response)
			return response.json();
		  } catch (e) {
			return Promise.reject(new Error('No se encontraron los datos'));
		  }
		}).then((datos) => {
			console.log(datos)
			setData(datos);
		  }).catch((e) => {
			console.log(e);
			console.log('No se encontró el archivo')
		  });
	  }, []);

	  const handleSend = (e) => {
		e.preventDefault();
		data.forEach((element) => {
		  console.log('acá');
		  addSocios(element);
		});
	  };

	return(
		<>
		<div className="botonsubirData"><button onClick={handleSend}>SUBIR DATA</button></div>
		<SideBar/>
		</>
		);
};
export default Home;