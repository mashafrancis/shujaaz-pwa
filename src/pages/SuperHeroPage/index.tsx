import * as React from 'react';

// third-party libraries
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid';

// components
import ProfilePanel from "@components/ProfilePanel";
import Loader from "@components/Loader";

// styles
import './SuperHeroPage.scss';

import { CharacterContext } from "@context/CharacterContext";

const placeholder = 'https://res.cloudinary.com/almondgreen/image/upload/v1588222696/Shujazz/Placeholder_couple_superhero_fv4w1x.png'


export const SuperHeroPage: React.FunctionComponent = () => {
  const characterDetails = React.useContext(CharacterContext);
  const { character, loading } = characterDetails;

  return (
    loading ? <Loader /> :
    <Grid>
      <Row>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <div className="basic-info">
            <div className="basic-info__row profile-info">
              <div className="character-photo">
                <img className="char-image" src={character.image.url || placeholder} alt="image" />
              </div>
            </div>
            <div className="basic-info__row profile-info">
              <div className="character-name">
                <p className="name">#{character.id}. {character.name}</p>
              </div>
            </div>
          </div>
        </Cell>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <ProfilePanel character={character}/>
        </Cell>
      </Row>
    </Grid>
  );
};

export default SuperHeroPage;
