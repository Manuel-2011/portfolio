import React from 'react';
import Circle from './forms/Circle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '90%',
  },
});

const randomVar = (suffix) => (uBound, lBound) => () => {
  if (!lBound) return `${Math.floor(Math.random() * uBound)}${suffix}`;

  const val = Math.floor(Math.random() * (uBound - lBound)) + lBound;
  return `${val}${suffix}`;
};

const randomPosition = randomVar('%')(100);
const randomSize = randomVar('px')(100, 300);
const randomDelay = randomVar('s')(15);

const BackgroundForms = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
      <Circle
        left={randomPosition()}
        size={randomSize()}
        delay={randomDelay()}
      />
    </div>
  );
};

export default BackgroundForms;
