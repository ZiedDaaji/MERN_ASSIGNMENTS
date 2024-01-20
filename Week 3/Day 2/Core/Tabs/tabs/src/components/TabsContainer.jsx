import React from 'react';

const TabsContainer = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;
    const tabStyle = (index) => {
    if (index === currentTabIndex) {
        return "tabOn";
        } else {
            return "tabOff";
        }
    }
    
    const setTabOn = (index) => {
    setCurrentTabIndex (index);
    }
    
    return (
    <div >
        { allTabs.map((item, index) => (
            <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setTabOn(index) }>
                { item.label }
            </div>
            ))
        }
    </div>
    )
}

export default TabsContainer;