import {Dimensions, PixelRatio} from 'react-native';

export const width = (value, withPx = true) => {
  const parseValue = String(value);
  const screenWidth = Dimensions.get('window').width;
  const widthPercent = parseFloat(parseValue) / 100;
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    screenWidth * widthPercent,
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const height = (value, withPx = true) => {
  const parseValue = String(value);
  const screenHeight = Dimensions.get('window').height;
  const heightPercent = screenHeight * parseFloat(parseValue);
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    heightPercent / 100,
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const vertical = (value, withPx = true) => {
  const parseValue = String(value);
  const screenHeight = Dimensions.get('window').width;
  const verticalPercent = screenHeight * parseFloat(parseValue);
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    verticalPercent / 100,
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const horizontal = (value, withPx = true) => {
  const parseValue = String(value);
  const screenHeight = Dimensions.get('window').height;
  const horizontalPercent = screenHeight * parseFloat(parseValue);
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    horizontalPercent / 100,
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const fontSize = (size, withPx = true) => {
  const pixelRatio = PixelRatio.get();
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return withPx ? `${size * 0.95}px` : size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return withPx ? `${size}px` : size;
      // iphone 6-6s
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return withPx ? `${size * 1.15}px` : size * 1.15;
    }
    // older phablets
    return withPx ? `${size * 1.25}px` : size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return withPx ? `${size}px` : size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return withPx ? `${size * 1.15}px` : size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return withPx ? `${size * 1.2}px` : size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return withPx ? `${size * 1.27}px` : size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return withPx ? `${size}px` : size;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return withPx ? `${size * 1.2}px` : size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return withPx ? `${size * 1.25}px` : size * 1.25;
    }
    // catch larger phablet devices
    return withPx ? `${size * 1.4}px` : size * 1.4;
  }
  return withPx ? `${size}px` : size;
};

export const Layout = {
  width,
  height,
  vertical,
  horizontal,
};
