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
  grey: '#999999',

};

// 자주 사용하는 스타일 속성
const common = {
 
};

const theme = {
  colors,
  common,
  device,
};

export default theme;
