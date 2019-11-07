import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getIncidents } from "../../actions/incidentActions";
import Spinner from "../layout/Spinner";

class ServiceIncidents extends Component {
  componentDidMount() {
    this.props.getIncidents();
    this.interval = setInterval(() => this.props.getIncidents(), 600000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { incidents } = this.props;

    if (incidents) {
      return (
        <>
          <h1 className="display-4 mb-2">
            <span className="text-danger">Incidents</span> List
          </h1>
          {incidents.map((recentIncident, i) => (
            <div key={i} className="card card-body mb-3">
              <h4>{recentIncident.title}</h4>
            </div>
          ))}
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}

ServiceIncidents.propTypes = {
  incidents: PropTypes.array.isRequired,
  getIncidents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  incidents: state.incident.incidents
});

export default connect(
  mapStateToProps,
  { getIncidents }
)(ServiceIncidents);
