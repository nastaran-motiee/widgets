import React, { useState } from "react";
import Accordion from "./components/Accordion"
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How to useReact?',
    content: 'You use React by creating components'
  }

];


const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
];

const App = () => {

  return (
    <div>
      <Translate />
    </div>


  );
}

export default App;