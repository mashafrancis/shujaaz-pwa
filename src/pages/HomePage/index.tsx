import * as React from 'react';

// third party apps
import { NavLink } from 'react-router-dom';

// components
import SearchInput from "@components/SearchBox";

// interfaces
import { HomePageProps } from './interfaces';

// styles
import './HomePage.scss';
// @ts-ignore
import logo from '../../../public/images/logo.svg';
import {ComponentContext} from "@context/ComponentContext";

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex } = componentContext;
  const renderExploreMore = () => (
    <React.Fragment>
      <button className="mdc-button mdc-button--raised home-button" onClick={() => setSelectedIndex(1)}>
        <span className="mdc-button__label">Explore more</span>
      </button>
    </React.Fragment>
  );

  return (
    <div className="cover">
      <section className="logo">
          <img src={logo} alt="logo" />
      </section>
      <section id="hero">
        <div className="hero-container">
          <div className="hero-info">
            <h1>All Heroes and Villains United</h1>
            <SearchInput />
            {renderExploreMore()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
