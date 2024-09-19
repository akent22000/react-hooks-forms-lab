import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        onItemFormSubmit={addItem} />
    </div>
  );
}

export default App;


// Step 3: Identify The Minimal (but complete) Representation Of UI State

// FILTER
// - The search text the user has entered (state)
// - The shopping list of products (don't need state!)

// - Is it passed in from a parent via props? If so, it probably isn’t state.
// - Does it remain unchanged over time? If so, it probably isn’t state.
// - Can you compute it based on any other state or props in your component? If so, it isn’t state.


// Step 4: Identify Where Your State Should Live

// FILTER
// - Identify every component that renders something based on that state. 
//   - (Filter, App?, ShoppingList?)
// - Find a common owner component (a single component above all the components that need the state in the hierarchy).
//   - (Filter)
// - Either the common owner or another component higher up in the hierarchy should own the state.
// - If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
