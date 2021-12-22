import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Setting from '../Setting';
import { useStyle } from './style';
import { TABS } from '../Constants';
import { styleTabs, styleTab } from './style';


function TabPanel(props) {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...rest}
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
            sx={styleTabs} 
          >
            {TABS.map((item,index) => 
              <Tab key={index} label={item} {...a11yProps(index)} sx={styleTab}  />
            )}
          </Tabs>
        <div className="tab" >
            <TabPanel value={value} index={0} className={classes.tabPanel}>
              <Setting />
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