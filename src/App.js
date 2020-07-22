import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Lists, Main } from "./pages";

import { Route } from "react-router-dom";
import { setUser } from "./redux/actions/user";

function App() {
  const activeUser = 0;

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/user").then(({ data }) => {
      dispatch(setUser(data[activeUser]));
    });
  }, []);

  return (
    <div>
      <Header />
      <Route path="/" component={Lists} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;
