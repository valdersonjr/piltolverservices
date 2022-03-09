import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
	opcoes: string[];
	nome: string;
}

export default function Selection({ opcoes, nome }: Props) {
	const [server, setServer] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setServer(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth color="primary" margin="dense">
				<InputLabel id="demo-simple-select-label">{nome}</InputLabel>

				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={server}
					label="Age"
					onChange={handleChange}
				>
					{opcoes.map((opcao, index) => (
						<MenuItem value={index}> {opcao} </MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
