import { useSelector, useDispatch } from 'react-redux';
import {  complete } from '../reducers/toDoActions';


function Todo() {
const count = useSelector((state) => state)
const dispatch = useDispatch()
    return (
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(complete("12121212121"))}
        >Complete</button>
            <h2>To do tasks</h2>
        </div>
    );
}

export default Todo;