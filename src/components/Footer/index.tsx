import * as React from 'react';
import './Footer.scss';
import {ComponentContext} from "@context/ComponentContext";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const Footer = () => {
  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex } = componentContext;

  return (
    <div className="footer" onClick={() => setSelectedIndex(0)}>
      <HomeRoundedIcon />
      <p>Home</p>
    </div>
  )
}

export default Footer;
