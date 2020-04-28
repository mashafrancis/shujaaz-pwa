import * as React from 'react';

// components
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

// interfaces
import { MenuBottomProps } from '@components/MenuRoutes/interfaces';

export const BottomNavigationMenus: MenuBottomProps[] = [
  {
    icon: <ArrowBackRoundedIcon />,
    label: 'Back',
    value: 'back',
  },
  {
    icon: <HomeRoundedIcon />,
    label: 'Home',
    value: 'home',
  },
  {
    icon: <ArrowForwardRoundedIcon />,
    label: 'Next',
    value: 'next',
  }
];
