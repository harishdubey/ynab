import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BudgetList from "./containers/BudgetList/BudgetList";
import BudgetDetails from "./containers/BudgetDetails/BudgetDetails";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BudgetList} />
        <Route path="/budget" exact component={BudgetDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;