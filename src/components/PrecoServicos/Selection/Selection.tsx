import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Selection() {
	const [server, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth color="primary" margin="dense">
				<InputLabel id="demo-simple-select-label">Servidor</InputLabel>

				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={server}
					label="Age"
					onChange={handleChange}
				>
					{/*opcao.map((opcaoAi: string, index) => (
						<MenuItem value={index}> {opcaoAi} </MenuItem>
					))*/}
				</Select>
			</FormControl>
		</Box>
	);
}
