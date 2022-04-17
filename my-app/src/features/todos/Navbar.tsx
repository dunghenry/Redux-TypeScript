import React from 'react'
import { useAppDispatch, useAppSelector} from '../../app/hooks';
const Navbar = () => {
    const { todos } = useAppSelector(state => state.todo)
  return (
      <div className="navbar">
          <h1>My Todos App use React, Redux Toolkit and TypeScript</h1>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Todos: {todos.length}</li>
          </ul>
      </div>
     
  )
}

export default Navbar;