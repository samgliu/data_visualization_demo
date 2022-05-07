// Appearance customization to improve readability.
// See https://vega.github.io/vega-lite/docs/
const dark = '#4a4a4a';
const skyBlue = '#87ceeb'
export const config = {
  axis: {
    domain: false,
    tickColor: 'lightGray',
  },
  style: {
    'guide-label': {
      fontSize: 20,
      fill: dark,
    },
    'guide-title': {
      fontSize: 30,
      fill: skyBlue,
    },
  },
};
