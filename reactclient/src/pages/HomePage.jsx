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
import TabXamComp from '../components/TabXamComp';

export const HomePage = () => {
	const { request } = useHttp()


	return (
		<Grid container
			direction="column"
			sx={{height: '100%'}}
		>
			<TabXamComp dataType = "Water"/>
		</Grid>
	)
}
