import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import DatasetIcon from '@mui/icons-material/Dataset';
import SchemaIcon from '@mui/icons-material/Schema';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import {Select, FormControl, Grid, InputLabel, MenuItem, TextField } from '@mui/material';
import JournalWaterComp from './JournalWaterComp';
import { NewTableComp } from './NewTableComp';


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

TabXamComp.PropTypes = {
    children: PropTypes.node,
    dataType: PropTypes.string,
}

export default function TabXamComp(props) {
    const { children, dataType } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [water, setWater] = React.useState(0);

    const handleWaterChange = (event) => {
        setWater(event.target.value);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid sx={{ marginLeft: 5 }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                            TabIndicatorProps={{ sx: { display: 'none' } }}
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    flexWrap: 'wrap',
                                },
                            }}>
                            <Tab icon={<MenuBookIcon />} label="Журнал регистрации" {...a11yProps(0)} />
                            <Tab icon={<DatasetIcon />} label="Сбор данных" {...a11yProps(1)} />
                            <Tab icon={<SchemaIcon />} label="Протоколы" {...a11yProps(2)} />
                            <Tab icon={<CalculateIcon />} label="Погрешность" {...a11yProps(3)} />
                            <Tab icon={<HelpCenterIcon />} label="Справочник" {...a11yProps(4)} />

                        </Tabs>
                    </Grid>
                    <Grid sx={{ marginRight: 5 }}>
                        <Select
                            id="waterSelect"
                            value={water}
                            onChange={handleWaterChange}
                            sx={{ width: 100 }}
                            textAlign
                        >
                            <MenuItem value={0} defaultValue>Питьевая вода</MenuItem>
                            <MenuItem value={1}>Сточная вода</MenuItem>
                            <MenuItem value={2}>Артскважины</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
            <TabPanel value={value} index={0}>
                <JournalWaterComp />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Сбор данных
                <NewTableComp/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Протоколы
            </TabPanel>
            <TabPanel value={value} index={3}>
                Погрешность
            </TabPanel>
            <TabPanel value={value} index={4}>
                Справочник
            </TabPanel>
        </Box>
    );
}