import * as React from 'react';

// third-party libraries
import {
  Grid,
  Row
} from '@material/react-layout-grid';
import { CharacterContext } from "@context/CharacterContext";
import CharacterCard from "@components/CharacterCard";

// styles
import './CharactersPage.scss';
import CharacterSkeletonLoader from "@placeholders/CharactersSkeletonPage";

export const CharactersPage: React.FunctionComponent = () => {
  const characterDetails = React.useContext(CharacterContext);
  const { loading, searchedCharacters } = characterDetails;

  return (
    loading ? <CharacterSkeletonLoader /> :
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
