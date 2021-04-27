import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIntro from './ImageIntro';
import FlipCard from './FlipCard';
import BackgroundForms from './BackGroundForms';

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
        <Typography variant="h1" color="primary" align="center">
          Manuel Mosquera
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" align="center">
          Web Developer
        </Typography>
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
    '& strong': {
      color: theme.palette.primary.main,
    },
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
        <Typography className={classes.text} variant="h5" component="p">
          Bilingual <strong>web developer</strong> focus on{' '}
          <strong>front-end development</strong>. One of the things that drives
          me is finding solutions to real-world problems through technology.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          My projects
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  introContainer: {
    height: '90vh',
    minHeight: '525px',
    position: 'relative',
  },
  title: {
    zIndex: 10,
  },
  profileImage: {
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <>
      <BackgroundForms styles={{ zIndex: 5 }} />
      <Grid
        container
        className={classes.introContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} md={10} lg={5} className={classes.title}>
          <FlipCard front={() => <MainTitle />} back={() => <Profile />} />
        </Grid>
        <Grid item className={classes.profileImage}>
          <ImageIntro />
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
