import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface Todo{
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

    }
})

export const selectTodo = (state: RootState) => state.todo
export const { } = todoSlice.actions;

export default todoSlice.reducer;