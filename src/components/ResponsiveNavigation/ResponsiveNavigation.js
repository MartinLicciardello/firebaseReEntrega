import React, { useContext } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import MenuGenders from '../MenuGenders/MenuGenders';
import { Link } from 'react-router-dom';
import './ResponsiveNavigation.css';

import { ItemsContext } from '../../context/ItemsContext';

const styles = {
	linkButton: {
		textDecoration: 'none',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	purchaseButton: {
		color: 'grey',
		fontSize: 18,
		fontWeight: 'bold',
	},
};

const ResponsiveNavigation = () => {
	const [items] = useContext(ItemsContext);

	return (
		<AppBar position='static' className='ResponsiveNavigation'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters className='ResponsiveNavigationContainer'>
					<Link to='/' style={styles.linkButton}>
						Music Store
					</Link>
					<MenuGenders />
					<Link to='/about' style={styles.linkButton}>
						About
					</Link>
					<Link to='/contact' style={styles.linkButton}>
						Contact
					</Link>
					{/* <Link to='/shop' style={styles.linkButton}>
						<i class='fa-solid fa-cart-shopping'></i>
						{items.length}
					</Link> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveNavigation;
