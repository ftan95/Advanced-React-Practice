import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter';

const CounterFn = (props) => {
    const [title, setTitle] = React.useState("CounterFn");
    const [isAlert, setIsAlert] = React.useState(false)
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();
    const counterRef = React.useRef(counter)

    counterRef.current = counter;

    const handleAdd = () => {
        // dispatch({type: 'increment'})
        dispatch(counterActions.increment())
    }

    const handleSub = () => {
        // dispatch({type: 'decrement'})
        dispatch(counterActions.decrement())
    }

    const hanldeAlert = () => {
        console.log("counter alert", counter)
        setTimeout(() => {
            alert(counterRef.current)
        }, 5000)
    }

    useEffect(() => {
        if (isAlert) {
            alert(counter)
            setIsAlert(false)
        }
    }, [isAlert])

    return <section>
        <header>{title}:{counter}</header>
        <button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
        <button onClick={hanldeAlert}>Alert after 5 s</button>
    </section>;
}

export default CounterFn;