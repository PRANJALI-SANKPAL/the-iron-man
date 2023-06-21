import React from 'react';
import { connect } from 'react-redux';
import { updateValue } from '../actions';

class ComponentB extends React.Component {
  handleChange = (event) => {
    this.props.updateValue(event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateValue,
};

export default connect(null, mapDispatchToProps)(ComponentB);
