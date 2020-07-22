import React from "react";

import { Header } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";

function App() {
  // const activeUser = 0;

  return (
    <div>
      <Header />
      <Route path="/" component={Lists} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;
