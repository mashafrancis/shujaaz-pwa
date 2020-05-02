// react libraries
import * as React from 'react';

// styles
import '../Loader.scss';
import './CharacterSkeletonPage.scss';
import {Cell, Grid, Row} from "@material/react-layout-grid";
import {Card} from "@material-ui/core";

const SkeletonCard = () => (
  <Cell
    desktopColumns={4}
    tabletColumns={4}
    phoneColumns={2}
  >
    <Card>
      <div className="character-card placeholder">
        <div className="animated-background"></div>
      </div>
    </Card>
  </Cell>
)

const CharacterSkeletonLoader = () => {
  return (
    <Grid>
      <Row>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </Row>
    </Grid>
  )
}

export default CharacterSkeletonLoader;
