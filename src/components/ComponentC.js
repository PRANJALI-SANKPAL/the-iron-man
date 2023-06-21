import React from 'react';
import { connect } from 'react-redux';

class ComponentC extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

export default connect(mapStateToProps)(ComponentC);