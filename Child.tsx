import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Child extends Component {
  static propsTypes = {
    fName: PropTypes.string,
    lName: PropTypes.string,
    city: PropTypes.string,
    userState: PropTypes.string,
  };

  static defaultProps = {
    fName: 'User fName',
    lName: 'User lName',
    city: 'User city',
    userState: 'User state',
  };

  componentDidMount() {
    // await this.setState({
    //   fName: this.props.fName,
    //   lName: this.props.lName,
    //   city: this.props.city,
    //   userState: this.props.userState,
    // });
  }

  constructor(props) {
    super(props);
    this.state = {
      fName: this.props.fName,
      lName: this.props.lName,
      city: this.props.city,
      userState: this.props.userState,
    };
  }

  render() {
    return (
      <div>
        <h4>This is a child component values coming from Props </h4>
        <p>First Name: {this.props.fName} </p>
        <p>Last Name: {this.props.lName} </p>
        <p>City: {this.props.city}</p>
        <p>State: {this.props.userState} </p>

        <h4>This is a child component values coming from States </h4>
        <p>First Name: {this.state.fName} </p>
        <p>Last Name: {this.state.lName} </p>
        <p>City: {this.state.city}</p>
        <p>State: {this.state.userState} </p>
      </div>
    );
  }
}
