import React from "react";
// import BuyStockContext from "../context/buyStockContext";
import { connect } from 'react-redux';

class BuyStockNumber extends React.Component {
  render() {
    return (
    //   <BuyStockContext.Consumer>
    //     {(stockContext) => <span>{stockContext.stockAmount}</span>}
    //   </BuyStockContext.Consumer>
        <span>{this.props.counter}</span>
    );
  }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps)(BuyStockNumber);
