import * as React from 'react';
import { Selection } from './index';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CopyRight } from '../CopyRight';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

const listaServer: string[] = ['BR', 'LAS'];

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: [
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'eawd',
		buttonVariant: 'outlined',
	},

	{
		title: 'Free',
		price: '0',
		description: [
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'eawd',
		buttonVariant: 'outlined',
	},
];

function PricingContent() {
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
					Elo Boost
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
							<CardContent>
								<Typography variant="h6" align="center">
									Escolha sua região:
								</Typography>
								<Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
									<img
										width="200px"
										alt="dianna chibi"
										src={require('../../assets/diannaChibi.png')}
									/>
								</Box>
								<Selection opcoes={listaServer} />
							</CardContent>
						</Card>
					</Grid>
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid item md={4}>
							<Card>
								<CardContent>{tier.title}</CardContent>
							</Card>
						</Grid>
					))}
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
			>
				<CopyRight />
			</Container>
			{/* End footer */}
		</React.Fragment>
	);
}

export default function PrecoServicos() {
	return <PricingContent />;
}
