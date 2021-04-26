import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIntro from './ImageIntro';
import FlipCard from './FlipCard';

const UseStyles1 = makeStyles({
  gridContainer: {
    height: '100%',
  },
});
const MainTitle = () => {
  const classes = UseStyles1();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.gridContainer}
    >
      <Grid item>
        <Typography variant="h1" color="primary">
          Manuel Mosquera
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">Web Developer</Typography>
      </Grid>
    </Grid>
  );
};

const UseStyles2 = makeStyles((theme) => ({
  gridContainer: {
    height: '100%',
  },
  text: {
    margin: 20,
    fontSize: '1.5rem',
    '& strong': {
      color: theme.palette.primary.main,
    },
  },
  button: {
    fontSize: '1.5rem',
  },
}));
const Profile = () => {
  const classes = UseStyles2();
  return (
    <Grid
      container
      className={classes.gridContainer}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h1" color="primary">
          Profile
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
          Bilingual <strong>web developer</strong> focus on{' '}
          <strong>front-end development</strong>. One of the things that drives
          me is finding solutions to real-world problems through technology.
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary" className={classes.button}>
          My projects
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  introContainer: {
    height: '90vh',
  },
  title: {
    marginRight: 30,
    padding: 20,
  },
});

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.introContainer}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={5}>
        <FlipCard front={() => <MainTitle />} back={() => <Profile />} />
      </Grid>
      <Grid item>
        <ImageIntro />
      </Grid>
    </Grid>
  );
};

export default Intro;
