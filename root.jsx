 import React from 'react';
 import Clock from './frontend/clock';
 import Tabs from "./frontend/tabs";
 import Weather from "./frontend/weather";
 import AutoComplete from "./frontend/autocomplete"


const Root = (props) => {

  const tabs = [{title: "one", content: "I am the first"},
                {title: "two", content: "I am the second"},
                {title: "three", content: "I am the third"}];

  const names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"];                

  return (
    <div>
      <Clock />
      <Weather />
      <div className="interactive">
        <Tabs tabs={tabs}/>
        <AutoComplete names={names}/>
      </div>
    </div>
  );
};

export default Root; 