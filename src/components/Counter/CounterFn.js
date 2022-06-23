import React, { useEffect, useContext } from 'react';
// import { useCounterContext } from '../../context/counterContext';
// import { useCounter } from '../../hooks/useCounter';
import { useSelector, useDispatch } from 'react-redux';

const CounterFn = (props) => {
    const [title, setTitle] = React.useState("CounterFn");
    const [isAlert, setIsAlert] = React.useState(false)
    // const [
    //     counter,
    //     handleAdd,
    //     handleSub
    // ] = useCounterContext()
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const counterRef = React.useRef(counter)

    counterRef.current = counter;

    const handleAdd = () => {
        dispatch({type: 'increment'})
    }

    const handleSub = () => {
        dispatch({type: 'decrement'})
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