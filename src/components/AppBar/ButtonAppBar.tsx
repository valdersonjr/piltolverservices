import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	menuNavLinks: {
		padding: '0px 10px',
		textDecoration: 'none',
		color: 'white',
	},
	menuNav: {
		background: '#000000',
	},
});

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar className={classes.menuNav}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Box sx={{ paddingLeft: 90 }}>
							<Link className={classes.menuNavLinks} to="/">
								Home
							</Link>
							<Link className={classes.menuNavLinks} to="/elo-boost">
								Elo Boost
							</Link>
							<Link className={classes.menuNavLinks} to="/duo-boost">
								Duo Boost
							</Link>
							<Link className={classes.menuNavLinks} to="classificatoria">
								Classificatoria
							</Link>
						</Box>
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
