import * as React from 'react';

import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  matchPath,
  useLocation,
} from 'react-router-dom';

import Box from '@mui/material/Box';
import Car from './components/CSVDataVisualization/VisualizationCar';
import Color from './components/CSVDataVisualization/VisualizationColor';
import MouseFollowingCircle from './components/MouseFollowing/MouseFollowingCircle';
import PlotD3 from './components/CSVDataVisualization/VisualizationPlot';
import Population from './components/CSVDataVisualization/VisualizationPopulation';
import PopulationD3 from './components/CSVDataVisualization/VisualizationPopulationD3';
import SmileyFaces from './components/SmileyFace/SmileyFaces';
import { StaticRouter } from 'react-router-dom/server';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Temp from './components/CSVDataVisualization/VisualizationTemp';
import TempD3 from './components/CSVDataVisualization/VisualizationTempD3';
import WorldMapD3 from './components/CSVDataVisualization/VisualizationWorldMapD3';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return (
      <StaticRouter location="/mouse-following-circle">{children}</StaticRouter>
    );
  }

  return (
    <MemoryRouter initialEntries={['/visualization-car']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTab() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    '/mouse-following-circle',
    '/smiley-faces',
    '/visualization-car',
    '/visualization-color',
    '/visualization-plot-d3',
    '/visualization-population',
    '/visualization-population-d3',
    '/visualization-temp',
    '/visualization-temp-d3',
    '/visualization-worldmap-d3',
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} variant="scrollable">
      <Tab
        label="Smiley Faces"
        value="/smiley-faces"
        to="/smiley-faces"
        component={Link}
      />
      <Tab
        label="Mouse Following Circle"
        value="/mouse-following-circle"
        to="/mouse-following-circle"
        component={Link}
      />
      <Tab
        label="Visualization Car"
        value="/visualization-car"
        to="/visualization-car"
        component={Link}
      />
      <Tab
        label="Visualization Color"
        value="/visualization-color"
        to="/visualization-color"
        component={Link}
      />
      <Tab
        label="Visualization Plot D3"
        value="/visualization-plot-d3"
        to="/visualization-plot-d3"
        component={Link}
      />
      <Tab
        label="Visualization Population"
        value="/visualization-population"
        to="/visualization-population"
        component={Link}
      />
      <Tab
        label="Visualization Population D3"
        value="/visualization-population-d3"
        to="/visualization-population-d3"
        component={Link}
      />
      <Tab
        label="Visualization Temperature"
        value="/visualization-temp"
        to="/visualization-temp"
        component={Link}
      />
      <Tab
        label="Visualization Temperature d3"
        value="/visualization-temp-d3"
        to="/visualization-temp-d3"
        component={Link}
      />
      <Tab
        label="Visualization WorldMap d3"
        value="/visualization-worldmap-d3"
        to="/visualization-worldmap-d3"
        component={Link}
      />
    </Tabs>
  );
}

export default function MyTabs() {
  return (
    <Router>
      <Box sx={{ width: '100%', padding: 1 }}>
        <MyTab />
        <Routes>
          <Route path="/smiley-faces" element={<SmileyFaces />} />
          <Route
            path="/mouse-following-circle"
            element={<MouseFollowingCircle />}
          />
          <Route path="/visualization-car" element={<Car />} />
          <Route path="/visualization-color" element={<Color />} />
          <Route path="/visualization-plot-d3" element={<PlotD3 />} />
          <Route path="/visualization-population" element={<Population />} />
          <Route
            path="/visualization-population-d3"
            element={<PopulationD3 />}
          />
          <Route path="/visualization-temp" element={<Temp />} />
          <Route path="/visualization-temp-d3" element={<TempD3 />} />
          <Route path="/visualization-worldmap-d3" element={<WorldMapD3 />} />
        </Routes>
      </Box>
    </Router>
  );
}
