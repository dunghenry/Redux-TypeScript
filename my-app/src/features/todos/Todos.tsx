import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodo } from './todoSlice';
import Navbar from './Navbar';
import TodoForm from './TodoForm';
import { markComplete, deleteTodo } from './todoSlice';
function Todos() {
    //Cách 1
    // const {todos, activeId} = useAppSelector(selectTodo);
    // console.log(todos, activeId);

    //Cách 2
    const { todos, activeId } = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();
    const toggleCompleted = (id: string) => {
        dispatch(markComplete(id))
    }
    const removeTodo = (id: string) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <Navbar />
            <TodoForm/>
            <div className="todo-list">
                <ul>
                    {
                        todos?.map(todo => (
                            <li
                                key={todo.id}
                                className={todo.completed ? 'completed' : ''}
                            >
                                {todo.title}
                                <input checked={todo.completed} type="checkbox" style={{ marginTop: '5px' }} onChange={() => toggleCompleted(todo.id)} />
                                <button onClick={() => removeTodo(todo.id)}>x</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Todos;