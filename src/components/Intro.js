import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIntro from './ImageIntro';

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
      <Grid item>
        <Paper className={classes.title}>
          <Typography variant="h1" color="primary">
            Manuel Mosquera
          </Typography>
          <Typography variant="h2">Web Developer</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <ImageIntro />
      </Grid>
    </Grid>
  );
};

export default Intro;
