import _ from 'lodash';
import {v4 as uuidv4} from 'uuid';

export const initialState = {
    list : [
        {
            'id' : uuidv4(),
            'title' : 'Faire le ménage', 
            'isDone' : false
        },
        {
            'id' : uuidv4(),
            'title' : 'Ranger la chambre', 
            'isDone' : false
        },
        {
            'id' : uuidv4(),
            'title' : 'Aller chez le coiffeur', 
            'isDone' : false
        },
        {
            'id' : uuidv4(),
            'title' : 'Manger', 
            'isDone' : false
        }
    ],
};

export const reducer = (state, action) => {
    const updatedState = _.cloneDeep( state )

    switch (action.type) {
        case 'add':
            updatedState.list.push(action.payload)
            break;           

        case 'update':
            const item = updatedState.list.find(item => item.id === action.payload.id)
            item.title = action.payload.title
            item.isDone = action.payload.isDone
            break;           

        case 'delete':
            updatedState.list.splice(state.list.indexOf(action.payload), 1)
            break;  

        default:
            throw new Error('Dispatch undefine');
    }

    updatedState.list.sort((a,b) => a.isDone - b.isDone)
    return updatedState;
}