import React from 'react'
import Loader from 'react-loaders'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.scss'
import FilterThree from './FilterThree';
import FilterTwo from './FilterTwo';
import FilterOne from './FilterOne';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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

const Assignment = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container assignment-page">
        <div className="assignment text-zone">

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs Color="White" value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="My Skills" {...a11yProps(0)} sx={{color:"white"}}/>
    <Tab label="1ClickCapital Products" {...a11yProps(1)} sx={{color:"white"}}/>
    <Tab label="1ClickCapital Blogs" {...a11yProps(2)} sx={{color:"white"}}  />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  <FilterOne/>
</TabPanel>
<TabPanel value={value} index={1}>
<FilterTwo/>
</TabPanel>
<TabPanel value={value} index={2}>
<FilterThree/>
</TabPanel>
        <Loader type="pacman" />
    </div>
    </div>
  )
}

export default Assignment