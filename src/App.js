import React from "react";
import { useSelector } from "react-redux";

import { Header, AnimePage } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/Auth";

function App() {
  const animePageDisplayed = useSelector(({ animePage }) => animePage.isDisplayed);
  return (
    <div>
      <Header />
      <AuthProvider>
      
        {animePageDisplayed && <AnimePage/>}
        <Route path="/" component={Main} exact />
        <PrivateRoute path="/lists" component={Lists} exact />

      </AuthProvider>
    </div>
  );
}

export default App;
