import React from "react";
import { useSelector } from "react-redux";

import { Header, AnimePage } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";

function App() {
  const animePageDisplayed = useSelector(({ animePage }) => animePage.isDisplayed);
  return (
    <div>
      <Header />
      {animePageDisplayed && <AnimePage/>}
      <Route path="/" component={Lists} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;
