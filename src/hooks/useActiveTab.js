import { useState } from "react";

export function useActiveTab(initialTab) {
    const [activeTab, setActiveTab] = useState(initialTab);

    const getTabClassName = (tabKey) => {
      return activeTab === tabKey ? "active" : "noActive";
    };
  
    const setActive = (tabKey) => {
      setActiveTab(tabKey);
    };
  
    return {getTabClassName, setActive};
}