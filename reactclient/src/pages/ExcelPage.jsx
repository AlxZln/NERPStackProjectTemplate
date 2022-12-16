import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'



import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export const ExcelPage = () => {



  const [text, setText] = useState()
  const { loading, request, requestFile, requestGetFile } = useHttp()


  const [file, setFile] = useState({})
  const [excel, setExcel] = useState({ headers: [], rows: {} })


  const generate = async () => {
    try {
      await requestGetFile('/api/excel/generate', 'GET')
    } catch (e) { }
  }

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const uploadSingleFile = async (e) => {
    console.log(file);
    var res = await requestFile('/api/excel/upload', 'POST', { file: file })
    console.log(res.message)
    setExcel(res.message);
  }


  return (
    <div>

      <input

        name="file"
        type="file"
        onChange={onChangeFile}
      />
      <Button onClick={() => uploadSingleFile(file)}>
        Загрузить
      </Button>

      <Button onClick={() => generate()}>
        Сгенерировать xlsx
      </Button>
      <div>
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
                      <TableCell

                        component="th"

                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Paper>
      </div>
    </div>

  );
}
