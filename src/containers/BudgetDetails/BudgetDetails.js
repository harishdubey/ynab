import React, { Component } from "react";
import { connect } from "react-redux";
import {
  get_budget_details
} from "./../../redux/actions/BudgetDetails/BudgetDetails";
import "./BudgetDetails.css";
import { timeStampToDate } from '../../constants/constants';
import { Link } from "react-router-dom";

export class BudgetDetails extends Component {

  componentDidMount() {
    let id = this.props.location.state.id;
    if (id) {
      this.props.get_budget_details(id);
    }
  }
  render() {
    const budget = this.props.budgetDetails ? this.props.budgetDetails.budgetDetails.budget : {};
    console.log(this.props.budgetDetails.budgetDetails.budget, "this.props.budgetDetails.budgetDetails.budget")
    let filterdData = budget && budget.accounts.filter(item => item.deleted === false)
    if (filterdData) {
      filterdData.sort((a, b) => parseFloat(b.balance) - parseFloat(a.balance));
    }
    return (
      <div className="layoutContainer">
        < div >
          <h1>YNAB Budget Details</h1>
          <Link to="/">
            <button className="backBtn">Back</button>
          </Link>
          {!this.props.budgetDetails.apiLoading ?
            <div className="containerBorder">
              <div className="rowDiv">
                <strong>Id: </strong> {budget && budget.id}
              </div>
              <div className="rowDiv">
                <strong>Name: </strong> {budget && budget.name}
              </div>
              <div className="rowDiv">
                <strong>Last Modified On :
              </strong> {budget && timeStampToDate(budget.last_modified_on)}
              </div>
              <div className="rowDiv">
                <strong>First Month :
              </strong> {budget && timeStampToDate(budget.first_month)}
              </div>
              <div className="rowDiv">
                <strong>Last Month :
              </strong> {budget && timeStampToDate(budget.last_month)}
              </div>
              <div>

                {filterdData && filterdData.length > 0 && (<table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Balance</th>
                      <th>Cleared Balance</th>
                      <th>Payee Id</th>
                    </tr>
                  </thead>
                  <tbody>{
                    filterdData.map(item => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id} </td>
                          <td>{item.name} </td>
                          <td>{item.type} </td>
                          <td>$ {item.balance} </td>
                          <td>$ {item.cleared_balance} </td>
                          <td>{item.transfer_payee_id} </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>)
                }
              </div>
            </div>
            : <div className="loadingDiv">Loading...</div>}
        </div>
      </div >
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    get_budget_details: (id) => dispatch(get_budget_details(id)),
  }
};
const mapStateToProps = (state) => {
  return {
    budgetDetails: state.budgetDetails,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BudgetDetails);