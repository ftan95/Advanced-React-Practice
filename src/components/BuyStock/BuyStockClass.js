import React from 'react';
import { getInitStockInfo } from '../../apis/stock.api';
import { connect } from 'react-redux';
import { counterActions } from '../../store/counter';
import { loadActions } from '../../store/load';

class BuyStockClass extends React.Component {
    componentDidMount() {
        this.props.startLoading()
        getInitStockInfo().then(option => {
            this.props.setOption(option.initCounter, option.incrementNum, option.decrementNum);
            this.props.endLoading()
        })
    }

    handleAdd() {
        this.props.increment();
    }

    handleSub() {
        this.props.decrement();
    }

    render() {
        return (
            <section>
                <h1>BuyStockClass</h1>
                <h1>How many stock you want to buy</h1>
                {
                    this.props.isLoading ? <h1>spinner...</h1> :
                        <>
                            <button onClick={this.handleAdd.bind(this)}>
                                +
                            </button>
                            <span>{this.props.counter}</span>
                            <button onClick={this.handleSub.bind(this)}>
                                -
                            </button>
                        </>
                }
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        incrementNum: state.counter.incrementNum,
        decrementNum: state.counter.decrementNum,
        isLoading: state.loading.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement()),
        startLoading: () => dispatch(loadActions.startLoading()),
        endLoading: () => dispatch(loadActions.endLoading()),
        setOption: (initCounter, incrementNum, decrementNum) => dispatch(counterActions.setOption({
            stock: initCounter, inc: incrementNum, dec: decrementNum
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyStockClass);
