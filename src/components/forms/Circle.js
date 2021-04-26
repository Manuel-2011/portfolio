import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (props) =>
  makeStyles((theme) => ({
    form: {
      position: 'absolute',
      top: `-${props.size}`,
      left: props.left,
      height: props.size,
      width: props.size,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.dark,
      animation: '$fall 15s infinite',
      animationDelay: props.delay || '0s',
    },
    '@keyframes fall': {
      '0%': {
        top: `-${props.size}`,
      },
      '20%': {
        top: `-${props.size * 0.6}`,
      },
      '80%': {
        top: '85%',
      },
      '100%': {
        top: '100%',
      },
    },
  }));
const Circle = (props) => {
  const classes = useStyles(props)();
  return <div className={classes.form}>&nbsp;</div>;
};

export default Circle;
