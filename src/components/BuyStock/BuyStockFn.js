import React, { useEffect } from 'react'
import { getInitStockInfo } from '../../apis/stock.api'
import { useSelector, useDispatch } from 'react-redux';

const BuyStockFn = () => {
    const counter = useSelector(state => state.counter);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'startLoad'})
        getInitStockInfo().then(option => {
            dispatch({type: 'setOption', stock: option.initCounter, inc: option.incrementNum, dec: option.decrementNum})
            dispatch({type: 'endLoad'})
        })
    }, [])

    const buyStock = () => {
        dispatch({type: 'increment'})
    }

    const sellStock = () => {
        dispatch({type: 'decrement'})
    }


    return <section>
        <h1>BuyStockFn</h1>
        <h1>How many stock you want to buy</h1>
        {
            isLoading ? <h1>loading...</h1> :
                <>
                    <button onClick={buyStock}>
                        +
                    </button>
                    <span>{counter}</span>
                    <button onClick={sellStock}>
                        -
                    </button>
                </>
        }
    </section>
}

export default BuyStockFn;