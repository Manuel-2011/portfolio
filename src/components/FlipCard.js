import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    perspective: 1500,
    width: '100%',
    height: 500,
    position: 'relative',
    '&:hover $front': {
      transform: 'rotateY(-180deg)',
    },
    '&:hover $back': {
      transform: 'rotateY(0deg)',
    },
  },
  front: {
    width: '100%',
    height: 500,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all .8s ease',
  },
  back: {
    width: '100%',
    height: 500,
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all .8s ease',
  },
});

const FlipCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {/* <Paper className={classes.title}>
          <Typography variant="h1" color="primary">
            Manuel Mosquera
          </Typography>
          <Typography variant="h2">Web Developer</Typography>
        </Paper> */}
      <Paper className={classes.front}>
        <Typography variant="h1" color="primary">
          Manuel Mosquera
        </Typography>
        <Typography variant="h2">Web Developer</Typography>
      </Paper>
      <Paper className={classes.back}>Back</Paper>
    </div>
  );
};

export default FlipCard;
