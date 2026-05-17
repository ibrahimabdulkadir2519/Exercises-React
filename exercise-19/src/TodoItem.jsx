import { useContext } from 'react';
import TodoContext from './TodoContext';
import style from './todoItem.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={style.item}>

      <div className={style.left}>
        
        <input
          type="checkbox"
          checked={todo.completed}
          className={style.checkbox}
          onChange={() =>
            dispatch({
              type: 'toggle',
              payload: todo.id,
            })
          }
        />

        <span
          className={style.text}
          style={{
            textDecoration: todo.completed
              ? 'line-through'
              : 'none',

            opacity: todo.completed
              ? '0.5'
              : '1',
          }}
        >
          {todo.text}
        </span>

      </div>

      <button
        className={style.button}
        onClick={() =>
          dispatch({
            type: 'delete',
            payload: todo.id,
          })
        }
      >
        Delete
      </button>

    </li>
  );
};

export default TodoItem;