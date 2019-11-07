import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';

import {addStatus} from '../../actions/statusActions';

class AddStatus extends Component {

  state = {
      region:"",
      productAndServices:"",
      status:"",
      errors:{}
  };

  onSubmit = e => {
    e.preventDefault();
    const {region, productAndServices, status} = this.state;
    
    // Checking errors
    if(region === ''){
      this.setState({ errors:{ region: "Region is Required"} })
      return;
    }
    if(productAndServices === ''){
      this.setState({ errors:{ productAndServices: "Service is Required"} })
      return;
    }
    if(status === ''){
      this.setState({ errors:{ status : "Status is Required"} })
      return;
    }

    const newStatus ={
      id: uuid(),
      region,
      productAndServices,
      status
    };

    this.props.addStatus(newStatus)

    //clearing state
    this.setState({
      region:"",
      productAndServices:"",
      status:"",
      errors:{}
    });
    this.props.history.push('/');

  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    const {region, productAndServices, status, errors} = this.state;
    return(
      <div className="card mb-3">
        <div className="card-header">Add Status</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Service"
              name="productAndServices"
              placeholder="Enter Service"
              value={productAndServices}
              onChange={this.onChange}
              error={errors.productAndServices}
            />
            <TextInputGroup
              label="Region"
              name="region"
              
              placeholder="Enter Region"
              value={region}
              onChange={this.onChange}
              error={errors.region}
            />
            <TextInputGroup
              label="Status"
              name="status"
              placeholder="Enter Status"
              value={status}
              onChange={this.onChange}
              error={errors.status}
            />
            <input
              type="submit"
              value="Add Status"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>

    );
  }
}

AddStatus.propTypes = {
  addStatus: PropTypes.func.isRequired
}

export default connect(null, {addStatus})(AddStatus);