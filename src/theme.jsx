const deviceSizes = {
  mobile: '400px',
  custom: '640px',
  tablet: '768px',
  laptop: '1200px',
};

const device = {
  mobile: `@media screen and (max-width: ${deviceSizes.mobile})`,
  custom: `@media screen and (max-width: ${deviceSizes.custom})`,
  tablet: `@media screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `@media screen and (max-width: ${deviceSizes.laptop})`,
};


// color
const colors = {
  black: '#212121',
  white: '#fcfff6',
  mauve: '#E1E0E8',
  blue: '#0052CD',
  beige: '#ebecf1',
};

// 자주 사용하는 스타일 속성
const common = {
  height: `height: calc(100vh - 7.2rem);`,
  textShadow: `text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5,
        -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
        -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;`,
};

const theme = {
  colors,
  common,
  device,
};

export default theme;
