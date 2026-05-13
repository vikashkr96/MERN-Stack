import { useState } from "react"
import "./TodoApp.css"
import { v4 as uuidv4 } from "uuid";
import { faL } from "@fortawesome/free-solid-svg-icons";


export default function () {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setnewTodo] = useState("");
    let addNewTask = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
        })
        setnewTodo("");
    }

    let updateTodoValue = (event) => {
        setnewTodo(event.target.value);
    }

    let deleteTask = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    }

    let markDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        );
    };

    return (
        <>
            <div className="todo">
                <input className="input" type="text" placeholder=" Add a task" value={newTodo} onChange={updateTodoValue} /> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={addNewTask} className="button">Add</button>
                <br /><br /><br />
                <div className="task">
                    <h3 className="taskdiv">Tasks to be done</h3>
                    <p className="list">
                        <ul>
                            {todos.map((todo) => (
                                <li key={todo.id}>
                                    <span
                                        style={{
                                            textDecoration: todo.isDone ? "line-through" : "none"
                                        }}
                                    >
                                        {todo.task} &nbsp;&nbsp;
                                        <i
                                            onClick={() => markDone(todo.id)}
                                            className={
                                                todo.isDone
                                                    ? "check fa-solid fa-square-check"
                                                    : "check fa-regular fa-square-check"
                                            }
                                        ></i>&nbsp;&nbsp;

                                        <i onClick={() => deleteTask(todo.id)} className=" delete fa-solid fa-trash-can"></i>
                                    </span>  </li>
                            ))}
                        </ul>
                    </p>
                </div>
            </div>

        </>
    )
}