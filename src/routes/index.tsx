import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SeedTypeListRoute from "./SeedTypeListRoute";
import SeedTypeDetail from "./SeedTypeDetailRoute";
import MenuAppBar from "../components/MenuAppBar";

function Index() {
  return <MenuAppBar title="Oaktown Greens" />;
}

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/seed_types" exact component={SeedTypeListRoute} />
      <Route path="/seed_types/:id" exact component={SeedTypeDetail} />
    </Router>
  );
}
