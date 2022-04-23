const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
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
};

const theme = {
  colors,
  common,
  device,
};

export default theme;
