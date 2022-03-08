import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

function CopyRight(props: any) {
	return (
		<Box sx={{ paddingTop: '1em' }}>
			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
				{...props}
			>
				{'Copyright © '}
				<a href="https://www.instagram.com/piltoverservices/">
					Piltover Services
				</a>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
}

export default CopyRight;
