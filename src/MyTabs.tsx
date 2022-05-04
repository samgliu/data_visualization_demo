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
import ColorVisualization from './components/CSVDataVisualization/ColorVisualization';
import MouseFollowingCircle from './components/MouseFollowing/MouseFollowingCircle';
import SmileyFaces from './components/SmileyFace/SmileyFaces';
import { StaticRouter } from 'react-router-dom/server';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return (
      <StaticRouter location="/mouse-following-circle">{children}</StaticRouter>
    );
  }

  return (
    <MemoryRouter initialEntries={['/smiley-faces']} initialIndex={0}>
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
    '/color-visualization',
    '/mouse-following-circle',
    '/smiley-faces',
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
        label="Color Visualization"
        value="/color-visualization"
        to="/color-visualization"
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
          <Route path="/color-visualization" element={<ColorVisualization />} />
        </Routes>
      </Box>
    </Router>
  );
}
