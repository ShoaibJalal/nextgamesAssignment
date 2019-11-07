import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Status from "./Status";
import { getStatuses } from "../../actions/statusActions";

class Statuses extends Component {
  componentDidMount() {
    this.props.getStatuses();
  }

  render() {
    const { statuses } = this.props;
    if (statuses) {
      return (
        <>
          <div className="row">
            <h2>STATUSES</h2>
          </div>

          <Status statuses={statuses} />
        </>
      );
    } else {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

Statuses.propTypes = {
  statuses: PropTypes.array.isRequired,
  getStatuses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  statuses: state.status.statuses
});

export default connect(
  mapStateToProps,
  { getStatuses }
)(Statuses);
