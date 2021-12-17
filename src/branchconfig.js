
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Setting from './setting';
import { textAlign } from '@mui/system';


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

    const handleChange = (event, newValue) => {
    setValue(newValue);
        };
    return(
        <div className="div">
          
        <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' ,height:"100%",width:"100%"}  } 
        >
      
      <Tabs
        className="headingTab"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',minWidth:"200px"  }} 
      >
        <Tab label="Branch Config" {...a11yProps(0)} style={{textTransform:"none",textAlign:"left",alignItems:"flex-start"}}  />
        <Tab label="Systems" {...a11yProps(1)} style={{textTransform:"none",alignItems:"flex-start" }} />
        <Tab label="Display" {...a11yProps(2)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Mobile" {...a11yProps(3)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Holidays" {...a11yProps(4)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Item Order Creation" {...a11yProps(5)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Discount" {...a11yProps(6)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Un(loading) Time" {...a11yProps(7)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="3D Loading" {...a11yProps(8)} style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Algorithms" {...a11yProps(9)}style={{textTransform:"none",alignItems:"flex-start"}} />
        <Tab label="Reasons Unfulfilled" {...a11yProps(10)}style={{textTransform:"none",alignItems:"flex-start"}} />
      </Tabs>
      <div style={{height:"532px",overflowY:"scroll",width:"100%", marginRight:"-16px" }}>
        <TabPanel value={value} index={0} style={{margin:"-24px -14px 0 -24px"  }}>
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