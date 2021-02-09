import { Dimensions, Platform } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const IsIos = Platform.OS === 'ios';
export const guidelineBaseWidth = 360;
export const guidelineBaseHeight = 640;
export const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const DefaultIndicatorRightPosition =
  (Dimensions.get('window').width / 100) * -3;
export const IndicationSecondPosition = width - width * 1.55;

export const moderateScale = (size, factor = defaultFactor) =>
  size + (scale(size) - size) * factor;
export const Colors = {
  first: 'rgb(92, 183, 202)',
  firstLighter: 'rgb(190, 234, 239)',
  black: 'rgb(46, 46, 56)',
  second: '#26296A',
  gray: '#c4c4c4',
};

export const colors = Colors;
export const Fonts = {
  light: 'light',
  bold: 'bold',
  normal: 'normal',
};

export const isIphoneX = () => {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
};
function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

const persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
const arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];
export const fixNumbers = (str) => {
  if (typeof str === 'string') {
    for (let i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

/// /import {width, height,scale,verticalScale,moderateScale,Colors,IsIos,colors,Fonts,fixNumbers } from '@style'
