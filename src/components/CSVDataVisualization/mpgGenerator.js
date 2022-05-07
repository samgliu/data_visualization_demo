import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';

import { Handler } from 'vega-tooltip';
import { config } from '../../config/vizConfig';
import { getData } from '../../util/getDate';
import { viz } from '../../util/viz';

vl.register(vega, vegaLite, {
  view: { renderer: 'svg' },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

export const mpg = async () => {
  const marks = viz
    .data(await getData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config);
  document.getElementById('mpg-container').appendChild(await marks.render());
};
