import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Autocomplete, CardHeader, Checkbox, FormControl, Grid, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Stack, TextField } from '@mui/material';
import { margin } from '@mui/system';
import MUIDataTable from 'mui-datatables';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import moment from 'moment';
import 'moment/dist/locale/ru';
moment.locale('ru');


const options = {
  filterType: 'checkbox',
  responsive: "simple",
  pagination: true,
  tableBodyHeight: '100%',
  textLabels: {
    body: {
      noMatch: "Извините, записи не обнаружены",
      toolTip: "Сортировка",
      columnHeaderTooltip: column => `Сортировка ${column.label}`
    },
    pagination: {
      next: "Следующая страница",
      previous: "Предыдущая страница",
      rowsPerPage: "Строк на странице:",
      displayRows: "",
    },
    toolbar: {
      search: "Поиск",
      downloadCsv: "Загрузить CSV",
      print: "Распечатать",
      viewColumns: "Показать колонки",
      filterTable: "Таблица фильтров",
    },
    filter: {
      all: "Все",
      title: "Фильтры",
      reset: "Сбросить",
    },
    viewColumns: {
      title: "Показать колонки",
      titleAria: "Показать/Скрыть колонки таблицы",
    },
    selectedRows: {
      text: "строк выбрано",
      delete: "Удалить",
      deleteAria: "Удалить выбранные строки",
    },
  }
};

const columns = [{
  name: "id",
  label: "№ п\п",
  options: {
    filter: true,
    sort: true,
  }
},
{
  name: "regId",
  label: "№ рег.",
  options: {
    filter: true,
    sort: true,
  }
},
{
  name: "dateOtbor",
  label: "Дата отбора",
  options: {
    filter: true,
    sort: true,
    customBodyRender: (value, tableMeta, updateValue) => {
      return (
        <LocalizationProvider dateAdapter={AdapterMoment} >
          <MobileDatePicker
            value={value}
            onChange={newValue => (console.log(newValue), updateValue(newValue))}
            label="Дата отбора"
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => (
              <TextField {...params}
              />
            )}
          />
        </LocalizationProvider>
      );
    }
  }
},
{
  name: "evmt",
  label: "Среда",
  options: {
    filter: true,
    sort: true,
    customBodyRender: (value, tableMeta, updateValue) => {
      return (
        <Select value={value} onChange={event => updateValue(event.target.value)}>
          <MenuItem value={0}>Природная среда</MenuItem>
          <MenuItem value={1}>Почва</MenuItem>
          <MenuItem value={2}>Сточная вода</MenuItem>
        </Select>
      );
    }
  }
},
{
  name: "program",
  label: "Программа",
  options: {
    filter: true,
    sort: true,
    customBodyRender: (value, tableMeta, updateValue) => {
      return (
        <Select value={value} onChange={event => updateValue(event.target.value)}>
          <MenuItem value={0}>скважины ВТБ</MenuItem>
          <MenuItem value={1}>скважины ВТБ 2</MenuItem>
          <MenuItem value={2}>скважины ВТБ 3</MenuItem>
        </Select>
      );
    }
  }
},
{
  name: "groundType",
  label: "Тип почвы",
  options: {
    filter: true,
    sort: true,
  }
},
{
  name: "actPriem",
  label: "Акт приемки/отбора проб",
  options: {
    filter: true,
    sort: true,
    customBodyRender: (value, tableMeta, updateValue) => {
      return (
        <Stack direction="row" >
          <TextField value={value.act} onChange={event => updateValue({
            ...value,
            act: event.target.value
          })} />
          <Checkbox checked={value.checked} onChange={event => updateValue({
            ...value,
            checked: event.target.checked
          })} />
          <LocalizationProvider dateAdapter={AdapterMoment} >
            <MobileDatePicker
              value={value.date}
              onChange={newValue => updateValue({
                ...value,
                date: newValue
              })}
              label="Дата отбора"
              inputFormat="DD/MM/YYYY"
              renderInput={(params) => (

                <TextField {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Stack>

      );
    }
  },
},
{
  name: "info",
  label: "Примечание",
  options: {
    filter: true,
    sort: true,
  }
},
{
  name: "month",
  label: "Месяц",
  options: {
    filter: true,
    sort: true,
  }
},
];

const data = [
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
  { id: 9365, regId: "9365 ЭВ", dateOtbor: 'Dec 24 2022', evmt: 0, program: 0, groundType: "", actPriem: { checked: true, date: 'Dec 24 2022', act: "3535-Э" }, info: "", month: "" },
  { id: 9366, regId: "9365 ЭВ", dateOtbor: "Dec 10 2022", evmt: 1, program: 2, groundType: "", actPriem: { checked: true, date: 'Dec 10 2022', act: "3536-Э" }, info: "", month: "" },
];

export default function JournalWaterComp() {

  {/*Состояние год*/ }
  const [dataYears, setDataYears] = React.useState(['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004'])
  const [year, setYear] = React.useState(9)
  const handleYearChange = (event, idx) => {
    setYear(idx);
  }

  {/*Состояние подразделение*/ }
  const [dataDivisions, setDataDivisions] = React.useState(['УВСИНГ', 'УКРНО', 'Управление по капитальному ремонту'])
  const [division, setDivision] = React.useState(0)
  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  }

  {/*Состояние Лиц Участок*/ }
  const [dataSectors, setDataSectors] = React.useState(['Ватлорский', 'Вачимский', 'Верхнедемьянский'])
  const [sector, setSector] = React.useState(0)
  const handleSectorChange = (event) => {
    setSector(event.target.value);
  }

  {/*Состояние Тип водоснабжения*/ }
  const [dataWaterSupplyTypes, setDataWaterSupplyTypes] = React.useState(['Централизованное', 'Не централизованное'])
  const [waterSupplyType, setWaterSupplyType] = React.useState('Централизованное')
  const handleWaterSupplyTypeChange = (event) => {
    setWaterSupplyType(event.target.value);
  }

  {/*Состояние Местоположение*/ }
  const [dataLocations, setDataLocations] = React.useState(['ООО "Газпромэнерго", канализационный колодец №5', 'ул. Промышленная, 22, АБК, санузел'])
  const [location, setLocation] = React.useState()
  const handleLocationChange = (event, newValue) => {
    setLocation(newValue);
  }

  {/*Состояние Среда*/ }
  const [dataEnvironment, setDataEnvironment] = React.useState(['Сточная вода', 'Разовая вода', 'Природная вода'])
  const [environmentFilter, setEnvironmentFilter] = React.useState([])
  const handleEnvironmentFilterChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "Все") {
      setEnvironmentFilter(environmentFilter.length === dataEnvironment.length ? [] : dataEnvironment);
      return;
    }
    setEnvironmentFilter(value);
  };


  {/*Состояние программа*/ }
  const [dataProgramm, setDataProgramm] = React.useState(['Экология (полный)', '2А', '8 компонентный'])
  const [programmFilter, setProgrammFilter] = React.useState([])
  const handleProgramFilterChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "Все") {
      setProgrammFilter(programmFilter.length === dataProgramm.length ? [] : dataProgramm);
      return;
    }
    setProgrammFilter(value);
  };


  {/*Состояние фильтр проб тип водоснабжения*/ }
  const [waterFilterSupplyTypes, setWaterFilterSupplyTypes] = React.useState([])
  const handleWaterFilterSupplyTypesChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "Все") {
      setWaterFilterSupplyTypes(waterFilterSupplyTypes.length === dataWaterSupplyTypes.length ? [] : dataWaterSupplyTypes);
      return;
    }
    setWaterFilterSupplyTypes(value);
  };


  return (
    <Grid container spacing={1}
    >


      {/*ГОД*/}
      <Grid item xs={6} md={2} lg={1}>
        <Card sx={{ height: '100%' }}>
          <CardHeader title="Год" titleTypographyProps={{ variant: 'subtitle1' }} />
          <CardContent sx={{ height: 200, overflow: 'auto' }}>
            <List >
              {
                dataYears.map((y, idx) => {
                  return <ListItemButton
                    selected={year === idx}
                    onClick={(event) => handleYearChange(event, idx)}
                  >
                    <ListItemText primary={y} />
                  </ListItemButton>
                })
              }
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/*АТРИБУТЫ ТОЧКИ*/}
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{ height: '100%' }}>
          <CardHeader title="Атрибуты точки" titleTypographyProps={{ variant: 'subtitle1' }} />
          <CardContent >
            <Grid container
              spacing={1}
              direction="column"
              justifyContent="space-between"
              alignItems="stretch">
              <Grid
                item
                container
                spacing={1}
                direction="row"

              >
                <Grid item xs={12} md={3} lg={3}>
                  <FormControl fullWidth>
                    <InputLabel id="division-select-label">Подразделение</InputLabel>
                    <Select
                      labelId="division-select-label"
                      id="division-select"
                      value={division}
                      label="Подразделение"
                      onChange={handleDivisionChange}
                    >
                      {
                        dataDivisions.map((d, idx) => {
                          return <MenuItem value={idx}>{d}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <FormControl fullWidth>
                    <TextField id="point-number-field" label="№ точки" labelId="point-number-label" variant="outlined" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <FormControl fullWidth>
                    <TextField id="point-lat-field" label="Широта" labelId="point-lat-label" variant="outlined" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <FormControl fullWidth>
                    <TextField id="point-lng-field" label="Долгота" labelId="point-lng-label" variant="outlined" />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                item
                container
                spacing={1}
                direction="row"
              >
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="sector-select-label">Лиц. участок</InputLabel>
                    <Select
                      labelId="sector-select-label"
                      id="sector-select"
                      value={sector}
                      label="Подразделение"
                      onChange={handleSectorChange}
                    >
                      {
                        dataSectors.map((s, idx) => {
                          return <MenuItem value={idx}>{s}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="water-supply-type-select-label">Тип водоснабжения</InputLabel>
                    <Select
                      labelId="water-supply-type-select-label"
                      id="water-supply-type-select"
                      value={waterSupplyType}
                      label="Тип водоснабжения"
                      onChange={handleWaterSupplyTypeChange}
                    >
                      {
                        dataWaterSupplyTypes.map((d, idx) => {
                          return <MenuItem value={idx}>{d}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Autocomplete
                  fullWidth
                  freeSolo
                  value={location}
                  onChange={(event, newValue) => { handleLocationChange(event, newValue) }}
                  id="combo-box-location"
                  options={dataLocations}
                  renderInput={(params) => <TextField {...params} label="Местоположение" />}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/*Фильтр проб*/}
      <Grid item xs={12} md={4} lg={5} >
        <Card sx={{ height: '100%' }}>
          <CardHeader title="Фильтр проб" titleTypographyProps={{ variant: 'subtitle1' }} />
          <CardContent >
            <Grid container
              spacing={1}
              direction="column"
            >
              <Grid item container
                direction="row"
                spacing={1}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="environment-filter-select-label">Среда</InputLabel>
                    <Select
                      labelId='environment-filter-select-label'
                      multiple
                      value={environmentFilter}
                      onChange={handleEnvironmentFilterChange}
                      renderValue={(environmentFilter) => environmentFilter.join(", ")}
                    >
                      <MenuItem value="Все">
                        <ListItemIcon>
                          <Checkbox
                            checked={dataEnvironment.length > 0 && dataEnvironment.length === environmentFilter.length}
                            indeterminate={environmentFilter.length > 0 && environmentFilter.length < dataEnvironment.length}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Все" />
                      </MenuItem>
                      {dataEnvironment.map((option) => (
                        <MenuItem key={option} value={option}>
                          <ListItemIcon>
                            <Checkbox checked={environmentFilter.indexOf(option) > -1} />
                          </ListItemIcon>
                          <ListItemText primary={option} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="program-filter-select-label">Программа</InputLabel>
                    <Select
                      labelId='program-filter-select-label'
                      multiple
                      value={programmFilter}
                      onChange={handleProgramFilterChange}
                      renderValue={(programmFilter) => programmFilter.join(", ")}
                    >
                      <MenuItem value="Все">
                        <ListItemIcon>
                          <Checkbox
                            checked={dataProgramm.length > 0 && dataProgramm.length === programmFilter.length}
                            indeterminate={programmFilter.length > 0 && programmFilter.length < dataProgramm.length}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Все" />
                      </MenuItem>
                      {dataProgramm.map((option) => (
                        <MenuItem key={option} value={option}>
                          <ListItemIcon>
                            <Checkbox checked={programmFilter.indexOf(option) > -1} />
                          </ListItemIcon>
                          <ListItemText primary={option} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl fullWidth>
                  <InputLabel id="water-filter-select-label">Тип водоснабжения</InputLabel>
                  <Select
                    labelId='water-filter-select-label'
                    multiple
                    value={waterFilterSupplyTypes}
                    onChange={handleWaterFilterSupplyTypesChange}
                    renderValue={(waterFilterSupplyTypes) => waterFilterSupplyTypes.join(", ")}
                  >
                    <MenuItem value="Все">
                      <ListItemIcon>
                        <Checkbox
                          checked={dataWaterSupplyTypes.length > 0 && waterFilterSupplyTypes.length === dataWaterSupplyTypes.length}
                          indeterminate={waterFilterSupplyTypes.length > 0 && waterFilterSupplyTypes.length < dataWaterSupplyTypes.length}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Все" />
                    </MenuItem>
                    {dataWaterSupplyTypes.map((option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          <Checkbox checked={waterFilterSupplyTypes.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </Grid>


      {/*Таблица*/}
      <Grid item xs={12} md={12} lg={12} >
        <MUIDataTable

          title={"Журнал"}
          data={data}
          columns={columns}
          options={options}
        />
      </Grid>
    </Grid>

  );


}