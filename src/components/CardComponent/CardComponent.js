import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ celularesData }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardMedia component='img' image={celularesData.img} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					{celularesData.nombre}
				</Typography>
				<Typography variant='h4' color='text.secondary'>
					Precio :{celularesData.precio}
				</Typography>
				<Typography variant='h5' color='text.secondary'>
					Stock:{celularesData.stock}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardComponent;
