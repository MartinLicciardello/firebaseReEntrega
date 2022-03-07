import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import './AlbumDetail.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import Spinner from '../../components/Spinner/Spinner';

const AlbumDetail = () => {
	const [celularData, setCelularData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log('albumData', albumData);

	const id = useParams();

	let celularId = id.id;

	console.log(celularId);



	useEffect(() => {
		const getCelular = async () => {
			const q = query(
				collection(db, 'celular'),
				where(documentId(), '==', celularId)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCelularData(docs);
		};
		getCelular();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [celularId]);

	return (
		<div>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				celularData.map((data) => {
					return <CardComponent celularData={data} />;
				})
			)}
		</div>
	);
};

export default AlbumDetail;
