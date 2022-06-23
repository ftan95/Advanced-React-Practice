import React from 'react';
import { connect } from 'react-redux';

class CounterNumber extends React.Component {
    render() {
        return <span>{this.props.counter}</span>
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    };
};

export default connect(mapStateToProps)(CounterNumber);