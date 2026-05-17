import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import style from './todofrom.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className={style.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAdd} className={style.button}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;