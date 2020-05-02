// react libraries
import * as React from 'react';

// styles
import '../Loader.scss';
import './SuperheroPageSkeleton.scss';
import {Cell, Grid, Row} from "@material/react-layout-grid";

const SuperheroPageLoader = () => {
  return (
    <Grid>
      <Row>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <div className="basic-placeholder">
            <div className="basic-placeholder__row profile-info">
              <div className="character-photo placeholder">
                <div className="animated-background"></div>
              </div>
            </div>
            <div className="basic-placeholder__row profile-info">
              <div className="character-name placeholder">
                <div className="animated-background"></div>
              </div>
            </div>
          </div>
        </Cell>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <div className="character-profile-1 placeholder">
            <div className="animated-background"></div>
          </div>
          <div className="character-profile-2 placeholder">
            <div className="animated-background"></div>
          </div>
        </Cell>
      </Row>
    </Grid>
  )
}

export default SuperheroPageLoader;
