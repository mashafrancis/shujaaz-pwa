// react library
import * as React from 'react';

// third party apps
import { Link, NavLink } from 'react-router-dom';

// styles
import './CharacterNotFound.scss';

// Interfaces
import { CharacterNotFoundProps } from './interfaces';
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

/**
 * Renders the page not found error message
 *
 * @returns {JSX}
 */
const CharacterNotFound: React.FunctionComponent<CharacterNotFoundProps> = props =>  (
  <div id="internal-server-error">
    <div className="server-error">
      <div className="server-error-500"/>
      <h2>Oops! Hero or Villain Not Found</h2>
      <p>Sorry but the hero or whatever villain you are looking for probably does not exists. Kindly go back.</p>
        <button onClick={() => window.location.replace('/')} className="mdc-button mdc-button--raised">
          <ArrowBackRoundedIcon />
          <span className="mdc-button__label">Back</span>
        </button>
    </div>
  </div>
);

export default CharacterNotFound;
