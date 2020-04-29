import * as React from 'react';

// components
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {character} from "@pages/SuperHeroPage/fixtures";
import ProfileDetails from "@components/ProfileDetails";

// interfaces
import { ProfilePanelProps } from "@components/ProfilePanel/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: '14px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export const ProfilePanel: React.FunctionComponent<ProfilePanelProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { character } = props;

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Biography</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Full Name" content={character.biography["full-name"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Alter Egos" content={character.biography["alter-egos"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Place of Birth" content={character.biography["place-of-birth"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="First Appearance" content={character.biography["first-appearance"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Publisher" content={character.biography["publisher"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Alignment" content={character.biography["alignment"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Aliases" content={character.biography["aliases"]} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Powerstats</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Intelligence" content={character.powerstats["intelligence"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Strength" content={character.powerstats["strength"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Speed" content={character.powerstats["speed"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Durability" content={character.powerstats["durability"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Power" content={character.powerstats["power"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Combat" content={character.powerstats["combat"]} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Appearance</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Gender" content={character.appearance["gender"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Race" content={character.appearance["race"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Height" content={character.appearance["height"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Weight" content={character.appearance["weight"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Eye Color" content={character.appearance["eye-color"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Hair Color" content={character.appearance["hair-color"]} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Work info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Occupation" content={character.work["occupation"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Base" content={character.work["base"]} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Connections</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Group affiliations" content={character.connections["group-affiliation"]} />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <ProfileDetails detail="Relatives" content={character.connections["relatives"]} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ProfilePanel;
