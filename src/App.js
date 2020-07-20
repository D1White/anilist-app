import React from "react";

import axios from "axios";

import { Header } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";

function App() {
  const activeUser = 0;

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setUser(data.user[activeUser]);
    });
  }, []);

  return (
    <div>
      <Header />
      <Route path="/" render={() => <Lists user={user} />} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;
