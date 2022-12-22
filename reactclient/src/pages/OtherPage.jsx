import React, { useCallback, useEffect, useState } from 'react'


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CircularProgress, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch } from '@mui/material';
import TransferList from '../components/TransferList';
import AlertDialogComp from '../components/AlertDialogComp';
import SliderComp from '../components/SliderComp';
import NestedListComp from '../components/NestedListComp';
import TreeViewComp from '../components/TreeViewComp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const OtherPage = () => {
    const [value, setValue] = React.useState(0);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [age, setAge] = React.useState('');

    const handleAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            sx={{ margin: 10 }}
        >
            <Grid item >

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleAge}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TransferList />
                    </TabPanel>
                </Box>
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Switch />} label="Disabled" />
                </FormGroup>
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <AlertDialogComp />
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <SliderComp />
            </Grid>
            <Grid item sx={{ marginTop: 10 }}>
                <NestedListComp />
            </Grid>
            <Grid item  sx={{ marginTop: 10 }}>
                <TreeViewComp />
            </Grid>
        </Grid>
    );
}