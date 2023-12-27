import React from 'react'
import "./Home.scss";
import Post from '../Post/Post';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';


const Home = () => {

    const todo = useSelector((state) => state.posts);
    const orderedTodo = todo.slice().sort((a, b) => b.date.localeCompare(a.date));
    return (
        <div className='home-main'>
            <Post />
            <div style={{ padding: "1rem" }}>
                {orderedTodo.map((item) => {
                    return (
                        <>
                            <Todo item={item} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home