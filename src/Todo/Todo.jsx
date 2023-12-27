import React, { useState } from 'react'
import "./TodoStyle.scss";
import Time from './../Post/Time';
import { useDispatch } from 'react-redux';
import { EditTodo, remove, updateTodo } from '../Post/PostSlice';
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const Todo = ({ item }) => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState(false);
    const [newTodo, setNewTodo] = useState("");

    const handleUpdateTodo = (id) => {

        const x = document.getElementById(`inputId${id}`)
        const add = document.getElementById(`AddId${id}`)
        if (x.style.display && add.style.display === "none") {
            AllClose();
            x.style.display = "flex"
            add.style.display = "flex"
        } else {
            x.style.display = "none";
            add.style.display = "none";
        }

    };
    const Update = (id) => {
        AllClose();
        dispatch(EditTodo({ id, newTodo }));
    }

    const AllClose = () => {
        const y = document.querySelectorAll(".inputId")
        const x = document.querySelectorAll(".Editadd")
        y.forEach(item => {
            item.style.display = "none"
        })
        x.forEach(item => {
            item.style.display = "none"
        })
    }

    const handleCompleteTodo = (id) => {
        setStatus(!status)
        dispatch(updateTodo({ id, newStatus: status ? true : false }));
    };



    return (
        <>

            <div className='todo-main-div'>
                {status}
                <div className='time'> <Time timestamp={item.date} /></div>

                <div className='close' onClick={() => {
                    dispatch(remove(item.id));
                }}>
                    <IoMdCloseCircle />
                </div>

                <div className={`${item.status === true ? "line" : "underline"}`}>

                    <div>
                        <div className={`${item.status === true ? 'uncheck' : "check"} me-3`}
                            onClick={() => handleCompleteTodo(item.id)}>
                            <FaCheck />
                        </div>
                    </div>
                    <div className='todo-text'>
                        {item.todo}

                        <div>
                            {item.status === true ?
                                <div className='edit' onClick={() => { handleUpdateTodo(item.id); setNewTodo(item.todo); }}>
                                    <FaPen />
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>

                </div>

                <div className='input-div'>
                    <input type="text" style={{ display: "none" }}
                        className='inputId'
                        id={`inputId${item.id}`}
                        autoFocus
                        onChange={(e) => setNewTodo(e.target.value)}
                        value={newTodo}
                    />

                    <div className='Editadd' style={{ display: "none" }} id={`AddId${item.id}`} onClick={() => Update(item.id)}>Add</div>
                </div>
            </div >



        </>
    )
}

export default Todo

