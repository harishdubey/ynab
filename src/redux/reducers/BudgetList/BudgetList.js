import {
  API_LOADING,
  BUDGET_LIST_SUCCESS,
  BUDGET_LIST_FAILED,
} from "./../../../constants/actionTypes";

const initialState = {
  apiLoading: false,
  budgetList: [],
  budgetListError: ""
};

export default function BudgetList(state = initialState, action) {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        apiLoading: action.payload,
      };
    case BUDGET_LIST_SUCCESS:
      return {
        ...state,
        budgetList: action.payload,
      };
    case BUDGET_LIST_FAILED:
      return {
        ...state,
        budgetListError: action.payload,
      };
    default:
      return state;
  }
}
