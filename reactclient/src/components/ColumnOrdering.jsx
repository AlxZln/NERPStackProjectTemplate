import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'


import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import MUIDataTable from "mui-datatables";

export const ColumnOrdering = () => {
    const [excel, setExcel] = useState({ headers: [], rows: {} })
    const { request } = useHttp()


    const columns = ["Name", "Company", "City", "State"];

    const data = [
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    const options = {
        filterType: 'checkbox',
        draggableColumns: {enabled:true}
      };

    return (
        <Grid
        >

            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />

        </Grid >
    )
}