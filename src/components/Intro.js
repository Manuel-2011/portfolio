import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIntro from './ImageIntro';
import FlipCard from './FlipCard';

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
        <FlipCard />
      </Grid>
      <Grid item>
        <ImageIntro />
      </Grid>
    </Grid>
  );
};

export default Intro;
