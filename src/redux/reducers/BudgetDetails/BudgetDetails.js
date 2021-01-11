import {
  API_LOADING,
  BUDGET_DETAILS_SUCCESS,
  BUDGET_DETAILS_FAILED
} from "./../../../constants/actionTypes";

const initialState = {
  apiLoading: false,
  budgetDetails: {},
  budgetDetailsError: ""
};

export default function budgetDetails(state = initialState, action) {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        apiLoading: action.payload,
      };
    case BUDGET_DETAILS_SUCCESS:
      return {
        ...state,
        budgetDetails: action.payload,
      };
    case BUDGET_DETAILS_FAILED:
      return {
        ...state,
        budgetDetailsError: action.payload,
      };
    default:
      return state;
  }
}
