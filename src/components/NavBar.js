import * as React from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) {
      navigate('/');
    } else if (value === 1) {
      navigate('/blockchain');
    } else if (value === 2) {
      navigate('/bitcoin');
    }
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1,
      }}
    >
      <BottomNavigation
        style={{ backgroundColor: 'white' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: 'black' }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'black' }}
          label="BlockChain"
          icon={<GridViewIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'black' }}
          label="BitCoin"
          icon={<CurrencyBitcoinIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
