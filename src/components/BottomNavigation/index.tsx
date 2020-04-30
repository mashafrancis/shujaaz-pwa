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
import {ComponentContext} from "@context/ComponentContext";

const useStyles = makeStyles({
  root: {
    width: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  hideButton: {
    display: 'none'
  }
});

export const PageBottomNavigation: React.FunctionComponent = () => {
  // @ts-ignore
  const classes = useStyles();
  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex, selectedIndex } = componentContext;

  const characterContext = React.useContext(CharacterContext);
  const { characterId, setCharacterId } = characterContext;

  const BottomNavigationMenus: MenuBottomProps[] = [
    {
      icon: <ArrowBackRoundedIcon className={(characterId === 1 && classes.hideButton)} />,
      label: 'Back',
      value: 'back',
      click: () => setCharacterId(parseInt(characterId, 10) - 1),
    },
    {
      icon: <HomeRoundedIcon />,
      label: 'Home',
      value: 'home',
      click: () => setSelectedIndex(0),
    },
    {
      icon: <ArrowForwardRoundedIcon />,
      label: 'Next',
      value: 'next',
      click: () => setCharacterId(parseInt(characterId, 10) + 1),
    }
  ];

  const CharactersNavigationMenus: MenuBottomProps[] = [
    {
      icon: <HomeRoundedIcon />,
      label: 'Home',
      value: 'home',
      click: () => setSelectedIndex(0),
    }
  ];


  return (
    <BottomNavigation
      value={1}
      className={`${classes.root} page-content__navigation`}
      showLabels
    >
      {
        (selectedIndex === 2) ?
          CharactersNavigationMenus.map((menu, index) => (
              <BottomNavigationAction
                key={index}
                onClick={menu.click}
                label={menu.label}
                icon={menu.icon}
              />
            )
          ) : BottomNavigationMenus.map((menu, index) => (
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
