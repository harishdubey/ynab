import React, { Component } from "react";
import { connect } from "react-redux";
import {
  get_budget_list
} from "./../../redux/actions/BudgetList/BudgetList";
import "./BudgetList.css";
import { timeStampToDate } from '../../constants/constants';
import { Link } from "react-router-dom";


export class BudgetList extends Component {
  componentDidMount() {
    this.props.get_budget_list();
  }
  render() {
    const budgetListArray = this.props.budgetList ? this.props.budgetList.budgetList.budgets : [];
    console.log(this.props.budgetList.apiLoading, "this.props.budgetList.budgetList.apiLoading")
    return (
      <div className="layoutContainer">
        < div >
          <h1>Welcome to YNAB Budget List</h1>
          {this.props.budgetList.apiLoading ? <div className="loadingDiv">Loading...</div> :
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>First Month</th>
                  <th>Last Month</th>
                  <th>Last Modified on</th>
                </tr>
              </thead>

              <tbody>
                {budgetListArray && budgetListArray.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Link
                          to={{
                            pathname: `/budget`,
                            state: { id: item.id }
                          }}
                        >{item.name}</Link></td>
                      <td>{timeStampToDate(item.first_month)}</td>
                      <td>{timeStampToDate(item.last_month)}</td>
                      <td>{timeStampToDate(item.last_modified_on)}</td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          }
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    get_budget_list: () => dispatch(get_budget_list()),
  }
};
const mapStateToProps = (state) => {
  return {
    budgetList: state.budgetList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);