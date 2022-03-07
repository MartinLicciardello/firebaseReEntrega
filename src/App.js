import React from 'react';
import './App.css';

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

// CONTEXT
import { ItemsProvider } from './context/ItemsContext';

// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
// import Shop from './views/Shop/Shop';
import AlbumDetail from './views/AlbumDetail/AlbumDetail';
import GenderType from './views/GenderType/GenderType';

const App = () => {
	return (
		<Router>
			<ItemsProvider>
				<div className='App'>
					<Header />
					<ResponsiveNavigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						{/* <Route path='/shop' element={<Shop />} /> */}
						<Route path='/details/:id' element={<AlbumDetail />} />
						<Route path='/gama/:gama' element={<GenderType />} />
					</Routes>
				</div>
			</ItemsProvider>
		</Router>
	);
};

export default App;
