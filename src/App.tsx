import MyTabs from './MyTabs';
import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function App() {
  return (
    <div className="App">
      <MyTabs />
    </div>
  );
}

export default App;
