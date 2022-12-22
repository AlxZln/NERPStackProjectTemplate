import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'


import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export const HomePage = () => {
	const [excel, setExcel] = useState({ headers: [], rows: {} })
	const { request } = useHttp()
	const [form, setForm] = useState({
		name: '', lastname: '', age: ''
	})


	const changeHandler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const addUserHandler = async () => {
		try {
			console.log("Clicked")
			const data = await request('/api/user/create', 'POST', { ...form })
			console.log('Data', data.message)
			setOpen(true)
			fetchUsers()
		} catch (e) {
		}
	}

	const [open, setOpen] = React.useState(false)



	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	};

	const fetchUsers = async () => {
		try {
			const fetched = await request('/api/user/', 'GET')
			console.log(fetched.message)
			setExcel(fetched.message)
		} catch (e) { }
	}

	useEffect(() => {
		fetchUsers()
		console.log("useEffect")
	}, [])

	return (

		<Grid container
			direction="column"
			justifyContent="center"
		>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
				<Alert onClose={handleClose} sx={{ background: "green", color: "white", "& .MuiAlert-icon": { color: 'white' } }} >
					Создан новый пользователь
				</Alert>
			</Snackbar>
			<Grid item sx={{ margin: 5, alignItems: 'left' }}>
				<Typography variant="h4" gutterBottom  >Пользователи</Typography>
			</Grid>
			<Grid item xs="6" >
				<Paper sx={{ width: '100%', overflow: 'hidden' }}>
					<TableContainer sx={{ maxHeight: 440, maxWidth: 'auto' }}>
						<Table stickyHeader   >
							<TableHead>
								<TableRow >
									{Boolean(excel.headers.length) && excel.headers.map((c, index) => (
										<TableCell sx={{ background: "white", boxShadow: "5px 0px 5px grey" }} >{c}</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{Boolean(excel.rows.length) && excel.rows.map((r, index) => (
									<TableRow key={index}>
										{Boolean(r.length) && r.map((cell, index) => (
											<TableCell component="th"> {cell} </TableCell>))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Grid>
			<Grid item xs="3" sx={{ marginTop: 10 }}>
				<Grid item container direction="row"
					justifyContent="center"
					alignItems="center">
					<Grid item >
						<TextField sx={{ margin: 5 }} id="name" type="text" name="name" label="Имя" variant="standard" value={form.name} onChange={changeHandler} />
					</Grid>

					<Grid item >
						<TextField sx={{ margin: 5 }} id="lastname" type="text" name="lastname" label="Фамилия" variant="standard" value={form.lastname} onChange={changeHandler} />
					</Grid>

					<Grid item >
						<TextField sx={{ margin: 5 }} id="age" type="text" InputProps={{ inputProps: { inputMode: 'numeric', pattern: '[0-9]', maxLength: 5 } }} name="age" label="Возраст" variant="standard" value={form.age} onChange={changeHandler} />
					</Grid>

					<Grid item >
						<Button sx={{ margin: 5 }} variant="contained" onClick={addUserHandler}>Добавить</Button>
					</Grid>
				</Grid>

			</Grid>
		</Grid>
	)
}
