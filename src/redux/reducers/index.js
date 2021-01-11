import { combineReducers } from "redux";
import budgetList from "./BudgetList/BudgetList";
import budgetDetails from "./BudgetDetails/BudgetDetails";

const rootReducer = combineReducers({
  budgetList: budgetList,
  budgetDetails: budgetDetails,
});

export default rootReducer;
