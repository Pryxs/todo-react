import { TodoItem } from './index'

const TodoList = ({list, dispatch}) => {
    return (
        <div className="todo-list">
            {list.length > 0 ? (
                list.map(item => <TodoItem key={item.id} item={item} dispatch={dispatch} />)
            ) : (
                <div className="empty">Aucun éléments</div>
            )}
        </div>
    );
}

export default TodoList;
