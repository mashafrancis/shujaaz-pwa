// react library
import * as React from 'react';

// styles
import './PageNotFound.scss';

// Interfaces
import { PageNotFoundProps } from './interfaces';

/**
 * Renders the page not found error message
 *
 * @returns {JSX}
 */
const PageNotFound: React.FunctionComponent<PageNotFoundProps> = props =>  (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404"/>
      <h1>404</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
        unavailable</p>
        <button onClick={props.history.goBack} className="mdc-button mdc-button--raised">
          <i className="material-icons mdc-text-field__icon">arrow_back</i>
          <span className="mdc-button__label">Back</span>
        </button>
    </div>
  </div>
);

export default PageNotFound;
