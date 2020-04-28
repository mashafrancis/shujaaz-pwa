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

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const renderExploreMore = () => (
    <React.Fragment>
      <NavLink to={'/explore'}>
        <button className="mdc-button mdc-button--raised home-button">
          <span className="mdc-button__label">Explore more</span>
        </button>
      </NavLink>
    </React.Fragment>
  );

  return (
    <div className="cover">
      <section className="logo">
          <img src={logo} alt="logo" />
          {/*<h2>Superheroes</h2>*/}
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
