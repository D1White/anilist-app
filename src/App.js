import React from "react";

import { Header } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Lists} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;
