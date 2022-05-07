import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';

import { Handler } from 'vega-tooltip';
import { config } from '../config/vizConfig';
import { getData } from './getDate';

// viz for car
const vizCar = vl
  .markCircle({ size: 300, opacity: 0.5 })
  .encode(
    vl.x().fieldQ('mpg').scale({ zero: false }),
    vl.y().fieldQ('horsepower').scale({ zero: false }),
    vl.color().fieldN('origin'),
    vl.size().fieldQ('weight'),
    vl.tooltip().fieldN('name')
  );

vl.register(vega, vegaLite, {
  view: { renderer: 'svg' },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

// viz for temp
const vizTemp = vl
  .markLine({ size: 5, opacity: 0.85 })
  .encode(
    vl.x().fieldT('timestamp').scale({ zero: false }),
    vl.y().fieldQ('temperature').scale({ zero: false }),
    vl.tooltip().fieldN('temperature')
  );

// viz for population
const vizPopulation = vl
  .markBar()
  .encode(
    vl.x().fieldN('country').sort('-y'),
    vl.y().fieldQ('population'),
    vl.color().fieldN('religion'),
    vl.tooltip().fieldN('religion')
  );

vl.register(vega, vegaLite, {
  view: { renderer: 'canvas' },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

const switchType = (type) => {
  switch (type) {
    case 'car':
      return vizCar;
    case 'temp':
      return vizTemp;
    case 'population':
      return vizPopulation;
    default:
      return;
  }
};

export const chartGenerator = async (csvUrl, type) => {
  const viz = switchType(type);
  const marks = viz
    .data(await getData(csvUrl))
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config);
  document.getElementById('chart-container').appendChild(await marks.render());
};
