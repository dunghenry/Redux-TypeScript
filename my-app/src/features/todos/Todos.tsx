import React from 'react';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store'
import { selectTodo } from './todoSlice';
function Todos() {

    //Cách 1

    // const {todos, activeId} = useAppSelector(selectTodo);
    // console.log(todos, activeId);

    //Cách 2
    const { todos, activeId } = useAppSelector(state => state.todo);
    console.log(todos, activeId);

    return (
        <div>
            
        </div>
    );
}

export default Todos;