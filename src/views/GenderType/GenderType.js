import React, { useState, useEffect } from 'react';
// REACT ROUTER DOM
import { useParams } from 'react-router-dom';
// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';


// COMPONENTS
import CardComponent from '../../components/CardComponent/CardComponent';

const GenderType = () => {
	const [celularData, setCelularData] = useState([]);

	const gama = useParams();

	const celularGama= gama.gama;

	// const valorMinimo = 10000;
	// const valorMedio = 79000
	// const valorMaximo = 200000,

	useEffect(() => {
		const getCelularData = async () => {
			const q = query(
				collection(db, 'celular'),
				where('gama', '==', celularGama)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCelularData(docs);
		};
		getCelularData();
	}, [celularGama]);

	return (
		<div>
			{celularData.map((data) => {
				return (
					<div>
						<CardComponent celularesData={data} key={data.id} />
					</div>
				);
			})}
		</div>
	);
};

export default GenderType;
