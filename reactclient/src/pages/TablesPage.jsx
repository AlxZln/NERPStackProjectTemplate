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
import GroupedTable from '../components/GroupedTable';
import SelectingTable from '../components/SelectingTable';
import BasicDataTable from '../components/BasicDataTable';
import CollapsibleTable from '../components/CollapsedTable';
import { ColumnOrdering } from '../components/ColumnOrdering';
import SpanningTable from '../components/SpanningTable';

export const TablesPage = () => {
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
            <Grid item sx={{ marginTop: 10 }}>
                <GroupedTable />
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <SelectingTable />
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <BasicDataTable />
            </Grid>
            <Grid item sx={{ marginTop: 10, marginBottom: 10 }}>
                <CollapsibleTable />
            </Grid>

            <Grid item sx={{ marginTop: 10, marginBottom: 10 }}>
                <ColumnOrdering />
            </Grid>

            <Grid item sx={{ marginTop: 10, marginBottom: 10 }}>
                <SpanningTable />
            </Grid>
            
        </Grid>
    )
}
