import React, { useState, useEffect } from 'react';

import CardComponent from '../CardComponent/CardComponent';
import { Link } from 'react-router-dom';

import './CardList.css';
import Spinner from '../Spinner/Spinner';

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const CardList = () => {
	const [celularesData, setCelularesData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCelulares = async () => {
			const q = query(collection(db, 'celular'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setCelularesData(docs);
		};
		getCelulares();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				<div className='CardListContainer'>
					{celularesData.map((data) => {
						return (
							<Link
								to={`details/${data.id}`}
								style={{ textDecoration: 'none' }}
								key={data.id}
							>
								<CardComponent celularesData={data} />
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
};

export default CardList;
