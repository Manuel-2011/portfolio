import React from 'react';
import profileImg from '../assets/intro-profile-image.gif';
import profileDarkImg from '../assets/intro-profile-image-dark.gif';
import { useThemeContext } from './SwitchTheme';

const ImageIntro = () => {
  const { darkMode } = useThemeContext();

  const image = darkMode ? profileDarkImg : profileImg;
  return <img src={image} alt="Profile avatar" />;
};

export default ImageIntro;
