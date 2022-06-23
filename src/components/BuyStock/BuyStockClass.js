import React from 'react';
import { getInitStockInfo } from '../../apis/stock.api';
import { connect } from 'react-redux';

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
        counter: state.counter,
        incrementNum: state.incrementNum,
        decrementNum: state.decrementNum,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'}),
        startLoading: () => dispatch({type: 'startLoad'}),
        endLoading: () => dispatch({type: 'endLoad'}),
        setOption: (initCounter, incrementNum, decrementNum) => dispatch({
            type: 'setOption', stock: initCounter, inc: incrementNum, dec: decrementNum
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyStockClass);
