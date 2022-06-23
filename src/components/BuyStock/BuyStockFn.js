import React, { useEffect } from 'react'
import { getInitStockInfo } from '../../apis/stock.api'
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter';
import { loadActions } from '../../store/load';

const BuyStockFn = () => {
    const counter = useSelector(state => state.counter.counter);
    const isLoading = useSelector(state => state.loading.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch({type: 'startLoad'})
        dispatch(loadActions.startLoading());
        getInitStockInfo().then(option => {
            // dispatch({type: 'setOption', stock: option.initCounter, inc: option.incrementNum, dec: option.decrementNum})
            dispatch(counterActions.setOption({stock: option.initCounter, inc: option.incrementNum, dec: option.decrementNum}))
            // dispatch({type: 'endLoad'})
            dispatch(loadActions.endLoading());
        })
    }, [])

    const buyStock = () => {
        // dispatch({type: 'increment'})
        dispatch(counterActions.increment())
    }

    const sellStock = () => {
        // dispatch({type: 'decrement'})
        dispatch(counterActions.decrement())
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