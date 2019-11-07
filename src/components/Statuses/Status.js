import React, { Component } from "react";
import classnames from "classnames";

class Status extends Component {
  render() {
    const { statuses } = this.props;
    return (
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>Services</th>
            <th>Region</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {statuses.map(status => (
            <tr key={status.id}>
              <td>{status.productAndServices}</td>
              <td>{status.region}</td>
              <td>
                <span
                  className={classnames({
                    "text-success": status.status === "Good",
                    "text-primary": status.status === "Information",
                    "text-warning": status.status === "Warning",
                    "text-danger": status.status === "Critical"
                  })}
                >
                  {status.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Status;
