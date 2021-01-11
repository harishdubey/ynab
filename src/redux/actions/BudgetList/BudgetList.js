import {
  API_LOADING,
  BUDGET_LIST_SUCCESS,
  BUDGET_LIST_FAILED
} from "../../../constants/actionTypes";
import * as URLS from "./../../../constants/urls";
import { apiTokenHeader } from "../../../constants/constants"
import axios from "axios";

export function apiLoading(data) {
  return {
    type: API_LOADING,
    payload: data,
  };
}

export function budgetList_Success(data) {
  return {
    type: BUDGET_LIST_SUCCESS,
    payload: data,
  };
}

export function budgetList_Failed(data) {
  return {
    type: BUDGET_LIST_FAILED,
    payload: data,
  };
}

export function get_budget_list() {
  return (dispatch) => {
    dispatch(apiLoading(true));
    return axios
      .get(URLS.BUDGET_LIST_API, apiTokenHeader)
      .then((resp) => {
        dispatch(apiLoading(false));
        dispatch(budgetList_Success(resp.data.data));
      })
      .catch((error) => {
        dispatch(apiLoading(false));
        dispatch(budgetList_Failed(error));
      });
  };
}
