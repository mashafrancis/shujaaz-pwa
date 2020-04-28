import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export const SearchInput: React.FunctionComponent = (props) => {
  const classes = useStyles(props);
  return (
    <Paper component="form" className={`${classes.root} search`}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
      <InputBase
        className={classes.input}
        fullWidth
        placeholder="Search for a hero or villain"
        inputProps={{ 'aria-label': 'search characters' }}
      />
    </Paper>
  );
};

export default SearchInput;
