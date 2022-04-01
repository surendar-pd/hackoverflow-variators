import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

const BottomNavi = () => {
    const [value, setValue] = React.useState(0);

    return (
    <Box sx={{ width: '100%' }}>
        <BottomNavigation
        // showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction label="" icon={<HomeIcon />} />
        <BottomNavigationAction label="" icon={<CreditCardIcon />} />
        <BottomNavigationAction label="" icon={<BarChartIcon />} />
        <BottomNavigationAction label="" icon={<PersonIcon />} />
        </BottomNavigation>
    </Box>
    );
}

export default BottomNavi