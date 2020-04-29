import * as React from 'react';
import { useHistory } from "react-router-dom";

// third party
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

// styles
import './BottomNavigation.scss';
import {CharacterContext} from "@context/CharacterContext";
import {MenuBottomProps} from "@components/BottomNavigation/interfaces";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const useStyles = makeStyles({
  root: {
    width: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

export const PageBottomNavigation: React.FunctionComponent = () => {
  // @ts-ignore
  const classes = useStyles();

  let history = useHistory();
  const handleBackHome = () => history.push('/');

  const characterContext = React.useContext(CharacterContext);
  const { characterId, setCharacterId } = characterContext;

  const BottomNavigationMenus: MenuBottomProps[] = [
    {
      icon: <ArrowBackRoundedIcon />,
      label: 'Back',
      value: 'back',
      click: () => setCharacterId(characterId - 1),
    },
    {
      icon: <HomeRoundedIcon />,
      label: 'Home',
      value: 'home',
      click: handleBackHome,
    },
    {
      icon: <ArrowForwardRoundedIcon />,
      label: 'Next',
      value: 'next',
      click: () => setCharacterId(characterId + 1),
    }
  ];

  return (
    <BottomNavigation
      value={1}
      className={`${classes.root} page-content__navigation`}
      showLabels
    >
      {
        BottomNavigationMenus.map((menu, index) => (
          <BottomNavigationAction
            key={index}
            onClick={menu.click}
            label={menu.label}
            icon={menu.icon}
          />
          )
        )
      }
    </BottomNavigation>
  );
};

export default PageBottomNavigation;
