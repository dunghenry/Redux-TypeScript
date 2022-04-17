import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from 'axios';
export const getTodos = createAsyncThunk('todos/fetchedData', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
})
export interface Todo{
    id: string,
    title: string,
    completed: boolean
}
interface TodoSlice{
    todos: Todo[],
    activeId: string
}
const initialState: TodoSlice = {
    todos: [{ id: '11', title: "Hi", completed: true }],
    activeId: ''
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const todo = action.payload;
            state.todos.push(todo)
        },
        markComplete: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getTodos.pending, () => {
                    console.log("Pending....")
                }
            )
            .addCase(getTodos.fulfilled, (state, action) => {
                
                state.todos = action.payload
                console.log("Successfully...")
                }
            )
            .addCase(getTodos.rejected, () => {
                    console.log("Failed...")
                }
            )
    }
})

export const selectTodo = (state: RootState) => state.todo
export const { addTodo, markComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;