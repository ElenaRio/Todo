import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';

function TodosActions({ resetTodos, deleteCompletedTodos, count }) {
  return (
    <div className={styles.todoesActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiDeleteBin2Line />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!count}
      >
        <RiRefreshLine />
      </Button>
    </div>
  );
}
export default TodosActions;
