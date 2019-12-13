const BaseTheme = {
  fontSize: "1.5rem",
  lineHeight: "1.6",
  respondTo: {
    desktopExtraBig: `min-width: ${1600 / 16}em`,
    desktopSuperBig: `min-width: ${1440 / 16}em`,
    desktopBig: `min-width: ${1280 / 16}em`,
    desktop: `min-width: ${1024 / 16}em`,
    tabletLandscape: `max-width: ${1023.999 / 16}em`,
    tablet: `min-width: ${768 / 16}em`,
    mobile: `max-width: ${414 / 16}em`
  }
};

export default BaseTheme;
