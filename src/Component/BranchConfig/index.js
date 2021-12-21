import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Setting from '../Setting';
import { useStyle } from './style';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function BranchConfig() {

    const [value, setValue] = React.useState(0);
    const classes= useStyle()
    console.log(classes)

    const handleChange = (event, newValue) => {
    setValue(newValue);
        };
    return(
      <div className="div">
          
      <Box className={classes.box}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',minWidth:"200px"}} 
      >
        <Tab label="Branch Config" {...a11yProps(0)}  className={classes.tab}  />
        <Tab label="Systems" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Display" {...a11yProps(2)} className={classes.tab} />
        <Tab label="Mobile" {...a11yProps(3)} className={classes.tab} />
        <Tab label="Holidays" {...a11yProps(4)} className={classes.tab} />
        <Tab label="Item Order Creation" {...a11yProps(5)} className={classes.tab} />
        <Tab label="Discount" {...a11yProps(6)} className={classes.tab} />
        <Tab label="Un(loading) Time" {...a11yProps(7)} className={classes.tab} />
        <Tab label="3D Loading" {...a11yProps(8)} className={classes.tab} />
        <Tab label="Algorithms" {...a11yProps(9)}className={classes.tab} />
        <Tab label="Reasons Unfulfilled" {...a11yProps(10)}className={classes.tab} />
      </Tabs>
      <div className="tab" >
        <TabPanel value={value} index={0} className={classes.tabPanel}>
        <Setting ></Setting>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
      
    </Box>
        </div>
    )
    
}


export default BranchConfig;