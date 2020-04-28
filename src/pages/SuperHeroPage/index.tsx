import * as React from 'react';

// third-party libraries
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid';

// styles
import './SuperHeroPage.scss';

// interfaces
import {
  SuperHeroPageProps,
  SuperHeroPageState
} from './interfaces';

export const SuperHeroPage: React.FunctionComponent<SuperHeroPageProps> = (props) => {
  const [state, setState] = React.useState<SuperHeroPageState>({
    character: {}
  });

  return (
    <Grid>
      <Row>
        <Cell columns={7} desktopColumns={7} tabletColumns={8} phoneColumns={4}>
          {(window.innerWidth < 539) && <div className="main-subheader"><h3>SuperHeroPage</h3></div>}
        </Cell>
      </Row>
    </Grid>
  );
};

export default SuperHeroPage;
