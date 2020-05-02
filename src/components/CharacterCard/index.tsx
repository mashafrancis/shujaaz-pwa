import * as React from 'react';

// components
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProfileDetails from "@components/ProfileDetails";
import { Cell } from '@material/react-layout-grid';

// interface
import {CharacterCardProps} from "@components/CharacterCard/interfaces";
import {ComponentContext} from "@context/ComponentContext";
import {CharacterContext} from "@context/CharacterContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '11px !important'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    extras: {
      display: 'flex',
    },
    button: {
      color: '#1967d2'
    },
    actions: {
      padding: '0'
    }
  }),
);

export const CharacterCard: React.FunctionComponent<CharacterCardProps> = (props) => {
  const classes = useStyles();
  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex } = componentContext;

  const characterContext = React.useContext(CharacterContext);
  const { setCharacterId } = characterContext;

  const fetchCharacter = () => {
    setSelectedIndex(1);
    setCharacterId(props.id)
  }

  return (
    <Cell
      desktopColumns={4}
      tabletColumns={4}
      phoneColumns={2}
    >
      <Card className={classes.root} onClick={fetchCharacter}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="p" variant="h6">
              {props.name}
            </Typography>
            <div><ProfileDetails content={`(${props.id})`} /></div>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button className={classes.button} size="small">View</Button>
          </CardActions>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.image}
          title={props.name}
        />
      </Card>
    </Cell>
  );
}

export default CharacterCard;
