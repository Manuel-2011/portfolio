import { Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      height: 400,
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
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
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
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
}));

const FlipCard = ({ front, back }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Paper className={classes.front} elevation={7}>
        {front()}
      </Paper>
      <Paper className={classes.back} elevation={7}>
        {back()}
      </Paper>
    </div>
  );
};

FlipCard.propTypes = {
  front: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default FlipCard;
