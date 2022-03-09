import * as React from 'react';
import { Selection } from './index';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { makeStyles } from '@material-ui/styles';

const listaServer: string[] = ['BR', 'LAS'];
const tierList: string[] = ['I', 'II', 'III', 'IV'];

const eloList: string[] = [
	'Challenger',
	'Grão Mestre',
	'Mestre',
	'Diamante',
	'Platina',
	'Gold',
	'Prata',
	'Bronze',
	'Ferro',
];

const imageList: string[] = [
	require('../../assets//elos/challengerElo.png'),
	require('../../assets//elos/grandmasterElo.png'),
	require('../../assets//elos/masterElo.png'),
	require('../../assets//elos/diamondElo.png'),
	require('../../assets//elos/platinumElo.png'),
	require('../../assets//elos/goldElo.png'),
	require('../../assets//elos/silverElo.png'),
	require('../../assets//elos/bronzeElo.png'),
	require('../../assets//elos/ironElo.png'),
];

const useStyle = makeStyles({
	cardzin: {
		height: 400,
	},
	imgElo: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: 4,
		paddingBottom: 25,
	},
	imgDianna: {
		display: 'block',
		width: 200,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: 35,
		paddingBottom: 21,
	},
});

interface Props {
	nome: string;
}

export default function PricingContent({ nome }: Props) {
	const classes = useStyle();

	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 6 }}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					{nome}
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="text.secondary"
					component="p"
				>
					No seviço de <b>Elo Boost</b> um jogador <b>mestre+</b> entrará em sua
					conta e colocará você em seu elo merecido. Nós garantimos um serviço
					seguro e livre de risco.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					<Grid item md={4}>
						<Card>
							<CardContent className={classes.cardzin}>
								<Typography variant="h6" align="center">
									Escolha sua região:
								</Typography>
								<Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
									<img
										className={classes.imgDianna}
										alt="dianna chibi"
										src={require('../../assets/diannaChibi.png')}
									/>
								</Box>
								<Selection nome="Servidor" opcoes={listaServer} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4}>
						<Card>
							<CardContent className={classes.cardzin}>
								<img
									className={classes.imgElo}
									width="180px"
									alt="elo"
									src={imageList[1]}
								/>
								<Selection nome="Elo" opcoes={eloList} />
								<Selection nome="Tier" opcoes={tierList} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4}>
						<Card>
							<CardContent className={classes.cardzin}>
								<img
									className={classes.imgElo}
									width="180px"
									alt="elo"
									src={imageList[0]}
								/>
								<Selection nome="Elo" opcoes={eloList} />
								<Selection nome="Tier" opcoes={tierList} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>

			{/* Footer ==============================DEPOIS VEJO DAQ P BAIXO======================= */}
			<Container
				maxWidth="md"
				component="footer"
				sx={{
					borderTop: (theme) => `1px solid ${theme.palette.divider}`,
					mt: 8,
					py: [3, 6],
				}}
			></Container>
			{/* End footer */}
		</React.Fragment>
	);
}
