import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addBy } from './CoutnerSlice';

const Coutner = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)



    return (
        <div>
            <h1>{count == -1 ? dispatch(increment()) : count}</h1>

            <button onClick={() => dispatch(increment())}>add</button>
            <button onClick={() => dispatch(addBy(5))}>Add By</button>
            <button onClick={() => dispatch(decrement())}>remove</button>
        </div>
    )
}

export default Coutner