import './App.css';
import React, { useState } from 'react';
import TabsContainer from './components/TabsContainer';
import Result from './components/Result';

function App() {

  const Array = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" }
    ];

  const [ allTabs, setAllTabs ] = useState(Array);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);
  return (
    <div className="App">
      <TabsContainer allTabs = { allTabs } currentTabIndex = { currentTabIndex } setCurrentTabIndex = { setCurrentTabIndex } />
      <Result allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;
