import * as React from 'react';

// third-party libraries
import {
  Grid,
  Row
} from '@material/react-layout-grid';
import { CharacterContext } from "@context/CharacterContext";
import CharacterCard from "@components/CharacterCard";
import {heroCharacters} from "@pages/SuperHeroPage/fixtures";
import TopBar from "@components/TopBar";
import {TopAppBarFixedAdjust} from "@material/react-top-app-bar";
import PageBottomNavigation from "@components/BottomNavigation";
import {useViewport} from "../../hooks";

// components
import Loader from "@components/Loader";

// styles
import './CharactersPage.scss';


export const CharactersPage: React.FunctionComponent = () => {
  const characterDetails = React.useContext(CharacterContext);
  const { loading, searchedCharacters } = characterDetails;

  const { width } = useViewport();
  const breakpoint = 539;

  return (
    loading ? <Loader /> :
      <div>
        <Grid>
          <Row>
            {
              searchedCharacters.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  image={character.image.url}
                  name={character.name}
                />
              ))
            }
          </Row>
        </Grid>
      </div>
  );
};

export default CharactersPage;
