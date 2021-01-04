import React from "react";
import Heroes from "./components/Heroes";

import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Heroes />
    </Provider>
  );
}

export default App;
