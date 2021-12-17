import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { textAlign } from '@mui/system';
import MainInfor from './mainInfor';
import Configuration from './configuration';

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

function LapTap() {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <div>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' ,width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="MAIN INFORMATION" {...a11yProps(0)} style={{maxWidth: '1000px', width:"50%"}}/>
                    <Tab label="CONGIGURATION" {...a11yProps(1)} style={{maxWidth: '1000px', width:"50%"}}/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <MainInfor ></MainInfor>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Configuration ></Configuration>
            </TabPanel>
        </Box>

        </div>
    )

    
}
export default LapTap;