import { useState } from 'react' 
import { Button } from '../Base'
import {v4 as uuidv4} from 'uuid';

const TodoAdd = ({dispatch}) => {
    const [task, setTask] = useState('')

    const addTask = () => {
        dispatch({ 
            type: "add",
            payload: {
                id: uuidv4(),
                title: task,
                isDone: false,
            },
        })
        setTask('')
    }

    return (
        <div className="todo-add">
            <input 
                type="text" 
                placeholder="nouvelle tâche" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button text="+" action={addTask} disabled={!task}/>
        </div>
    );
}

export default TodoAdd;