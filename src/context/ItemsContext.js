import React, { useState, createContext } from 'react';

export const ItemsContext = createContext();

const initialState = () => [
	{
		id: 45454,
		artist: 'The Cure',
		title: 'The head of the door',
		price: 12,
		stock: 4,
		year: 1985,
	},
];

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([initialState]);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};
