import { Box, Tab, Tabs, Typography } from '@mui/material/';

import SmileyFace from './components/SmileyFace/SmileyFace';
import { range } from 'd3';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyTabs = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // array for smiley faces
  const faceArray = range(6 * 3);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h4" color="primary" sx={{ padding: 1 }}>
          Data Visualization Demo
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Smiley Face" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {faceArray.map(() => {
          return (
            <SmileyFace
              width={160}
              height={160}
              strokeWidth={6 + Math.random() * 3}
              eyeOffsetX={20 + Math.random() * 9}
              eyeOffsetY={20 + Math.random() * 15}
              eyeRadius={5 + Math.random() * 8}
              mouthWidth={7 + Math.random() * 6}
              mouthRadius={25 + Math.random() * 10}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};
export default MyTabs;
