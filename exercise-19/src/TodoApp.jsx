import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './redcures';
import TodoList from './TodoList';
import TodoForm from './TodoFrom';
import style from './todoApp.module.css';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={style.container}>
        <h2 className={style.title}>Todo App </h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;