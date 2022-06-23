import React from 'react';
import { withCounter } from "../../hoc/withCounter";
import { connect } from 'react-redux';
import { counterActions } from '../../store/counter';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "CounterClass"
        }
        this.hanldeAlert = this.hanldeAlert.bind(this);
    }

    handleAdd() {
        this.props.increment();
    }

    handleSub() {
        this.props.decrement();
    }

    hanldeAlert() {
        setTimeout(() => {
            alert(this.props.counter)
        }, 5000)
    }

    render() {
        return (
            <section>
                <header>{this.state.title}:{this.props.counter}</header>
                <button onClick={this.handleAdd.bind(this)} >+</button><button onClick={this.handleSub.bind(this)}>-</button>
                <button onClick={this.hanldeAlert}>Alert after 5 s</button>
            </section>
        );
    }

}

// const CounterContainer = withCounter(Counter);

// export default CounterContainer;
const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);