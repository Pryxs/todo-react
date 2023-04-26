import { useState } from 'react'
import { Button } from '../Base'

const TodoItem = ({item, dispatch}) => {
    const [onEdit, setOnEdit] = useState(false);


    const remove = () => {
        dispatch({ 
            type: "delete",
            payload: item,
        })
    }

    const update = (e) => {
        let {name, value, checked, type} = e.target

        if(type === "checkbox") value = checked

        dispatch({ 
            type: "update",
            payload: {...item, [name] : value},
        })
    }

    return (
        <div className={`todo-item ${item.isDone ? 'done' : ''}`}>
            <div className="checkbox">
                <input type="checkbox" name="isDone" checked={item.isDone} onChange={(e) => update(e)}/>
                <div>{item.isDone ? 'terminé !' : 'à faire'}</div>
            </div>
            <div className="title">
                {!onEdit ? (
                    item.title
                ) : (
                    <>
                        <input type="text" name="title" value={item.title} onChange={(e) => update(e)} />
                        <Button text="✅" action={() => setOnEdit(false)} />
                    </>
                )}
            </div>
            <div className="actions">
                <Button text='editer' action={() => setOnEdit(true)} />
                <Button text='supprimer' action={remove} />
            </div>
        </div>
    );
}

export default TodoItem;
