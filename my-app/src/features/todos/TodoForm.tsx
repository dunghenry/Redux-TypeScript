import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todoSlice';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from './todoSlice';
function TodoForm() {
    const [title, setTitle] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todo: Todo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        //dispatch
        if (title) {
            dispatch(addTodo(todo));
        }
        else {
            alert("Please enter todo!Thanks 💕");
        }
        setTitle('');
        inputRef.current?.focus();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} value={title} type="text" placeholder="Enter todo..." onChange={(e) => setTitle(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default TodoForm;