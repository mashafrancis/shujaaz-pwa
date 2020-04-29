import * as React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ProfileDetailsProps } from "@components/ProfileDetails/interfaces";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      color: '#1967d2'
    },
    secondaryDetails: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const ProfileDetails: React.FunctionComponent<ProfileDetailsProps> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.details}>{props.detail}</Typography>
      <Typography className={classes.secondaryDetails}>{props.content}</Typography>
    </React.Fragment>
  );
}

export default ProfileDetails;
