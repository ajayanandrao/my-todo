import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { add } from './PostSlice';
import "./Post.scss";

const Post = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState();

    const submit = () => {
        if (name) {
            dispatch(add(name));
        }
        setName("")
        return
    }

    return (
        <>

            <div className='post-wrapper'>
                <div className='post-color'>
                    <h2 className='my-todo'>My Todo</h2>
                    <div className='post-input-div'>
                        <div className='post-div'>
                            <input type="text" className='input' placeholder='Add a task'
                                onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className='todo-btn' onClick={submit}>Add Todo</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Post