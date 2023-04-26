import { useReducer, useState } from 'react'
import { reducer, initialState } from '../reducers/TodoListReducer'
import { TodoList, TodoAdd } from '../components/TodoList';
import { SearchBar } from '../components/Base'

const Home = () => {
  const [match, setMatch] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const getFullList = () => state.list.map(item => item)

  const getFilteredList = () => state.list.filter(item => item.title.toLowerCase().match(match.toLowerCase()))

  const getList = () => {
    if(match) return getFilteredList();

    return getFullList();
  }
  
  return (
    <div className="Home">
      <h1>📅 Todo List</h1>
        <TodoAdd dispatch={dispatch} />
        <SearchBar value={match} onChange={setMatch} />
        <TodoList list={getList()} dispatch={dispatch} />
    </div>
  );
}

export default Home;
